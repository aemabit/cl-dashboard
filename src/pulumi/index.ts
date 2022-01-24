import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as github from "@pulumi/github";

const config = new pulumi.Config();
const zoneId = config.require("zoneId");
const domain = config.require("domain");
const githubRepoName = config.require("githubRepoName");
const acmCertificateId = config.get("acmCertificateId");
const iamUserConfig = config.get("iamUser");

export const environment = pulumi.getStack();
let stackRepoName;

if (environment !== "staging") {
    stackRepoName = githubRepoName;
} else {
    stackRepoName = [githubRepoName, pulumi.getStack()].join("-");
}

let sslCertificate: aws.acm.Certificate;

if (acmCertificateId) {
    sslCertificate = aws.acm.Certificate.get("certificate", acmCertificateId);
} else {
    sslCertificate = new aws.acm.Certificate(domain, {
        domainName: domain,
        subjectAlternativeNames: [`*.${domain}`],
        validationMethod: "DNS",
    });
}

const bucket = new aws.s3.Bucket(stackRepoName, {
    bucketPrefix: stackRepoName,
    acl: "public-read",
    website: {
        indexDocument: "index.html",
        errorDocument: "index.html",
    },
});

const bucketDomainName = `${bucket.bucketDomainName}`;

const originAccess = new aws.cloudfront.OriginAccessIdentity(bucketDomainName);

const policyDocument = pulumi.all([bucket.arn]).apply(([bucketArn]) =>
    JSON.stringify({
        Version: "2012-10-17",
        Statement: [
            {
                Effect: "Allow",
                Action: [
                    "s3:PutObject",
                    "s3:PutObjectAcl",
                    "s3:GetObject",
                    "s3:GetObjectAcl",
                    "s3:GetBucketLocation",
                    "s3:DeleteObject",
                    "s3:ListBucket",
                ],
                Resource: [`${bucketArn}`, `${bucketArn}/*`],
            },
            {
                Effect: "Allow",
                Action: ["cloudfront:CreateInvalidation"],
                Resource: "*",
            },
        ],
    }),
);

let iamUser: aws.iam.User;

if (iamUserConfig) {
    iamUser = aws.iam.User.get("iamUser", iamUserConfig);
} else {
    iamUser = new aws.iam.User("iamUser", {
        name: "cl-dashboard-user",
    });
}

const s3Policy = pulumi
    .all([bucket.arn, originAccess.iamArn])
    .apply(([bucketArn, originAccessArn]) =>
        aws.iam.getPolicyDocument({
            statements: [
                {
                    actions: [
                        "s3:PutObject",
                        "s3:PutObjectAcl",
                        "s3:GetObject",
                        "s3:GetObjectAcl",
                        "s3:GetBucketLocation",
                        "s3:DeleteObject",
                        "s3:ListBucket",
                    ],
                    resources: [`${bucketArn}`, `${bucketArn}/*`],
                    principals: [
                        {
                            type: "AWS",
                            identifiers: [`${originAccessArn}`],
                        },
                    ],
                },
            ],
        }),
    );

const bucketPolicy = new aws.s3.BucketPolicy(
    bucketDomainName,
    {
        bucket: bucket.id,
        policy: s3Policy.apply((p) => p.json),
    },
    {
        dependsOn: [bucket, originAccess],
    },
);

const cloudfront = new aws.cloudfront.Distribution(
    bucketDomainName,
    {
        origins: [
            {
                domainName: bucket.bucketRegionalDomainName,
                originId: stackRepoName,
                s3OriginConfig: {
                    originAccessIdentity:
                        originAccess.cloudfrontAccessIdentityPath,
                },
            },
        ],
        aliases: [domain],
        enabled: true,
        defaultRootObject: "index.html",
        defaultCacheBehavior: {
            allowedMethods: ["GET", "HEAD", "OPTIONS"],
            cachedMethods: ["GET", "HEAD"],
            targetOriginId: stackRepoName,
            forwardedValues: {
                queryString: false,
                cookies: {
                    forward: "none",
                },
            },
            viewerProtocolPolicy: "redirect-to-https",
        },
        restrictions: {
            geoRestriction: {
                restrictionType: "none",
            },
        },
        viewerCertificate: {
            sslSupportMethod: "sni-only",
            acmCertificateArn: sslCertificate.arn,
        },
        customErrorResponses: [
            {
                errorCode: 403,
                responseCode: 200,
                responsePagePath: "/",
            },
            {
                errorCode: 404,
                responseCode: 200,
                responsePagePath: "/",
            },
        ],
    },
    {
        dependsOn: [sslCertificate, bucket, bucketPolicy, originAccess],
    },
);

const policy = new aws.iam.Policy(stackRepoName, {
    policy: policyDocument,
});

new aws.iam.PolicyAttachment(
    stackRepoName,
    {
        users: [iamUser],
        policyArn: policy.arn,
    },
    {
        dependsOn: [iamUser, policy],
        deleteBeforeReplace: true,
    },
);

const makeSecret = (secretName: string, value: pulumi.Input<string>) =>
    new github.ActionsSecret(
        secretName,
        {
            repository: githubRepoName,
            secretName,
            plaintextValue: value,
        },
        {
            deleteBeforeReplace: true,
        },
    );

const accessKey = new aws.iam.AccessKey(`${stackRepoName}-access-key`, {
    user: iamUser.name,
});

pulumi
    .all([accessKey.id, accessKey.secret])
    .apply(([AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY]) => {
        makeSecret("AWS_SECRET_ACCESS_KEY", AWS_SECRET_ACCESS_KEY);
        makeSecret("AWS_ACCESS_KEY_ID", AWS_ACCESS_KEY_ID);
    });

makeSecret(
    "AWS_REGION",
    aws.getRegion().then((region) => region.name),
);
makeSecret(
    `${stackRepoName.replace(/-/g, "_").toUpperCase()}_BUCKET_NAME`,
    bucket.id,
);
makeSecret(
    `${stackRepoName.replace(/-/g, "_").toUpperCase()}_CLOUDFRONT_ARN`,
    cloudfront.arn,
);

new aws.route53.Record("domain", {
    zoneId,
    name: domain,
    type: "A",
    aliases: [
        {
            evaluateTargetHealth: false,
            name: cloudfront.domainName,
            zoneId: cloudfront.hostedZoneId,
        },
    ],
});

export const distribution = cloudfront.domainName;
export const bucketDomain = bucket.bucketDomainName;
export const bucketName = bucket.id;
export const bucketEndpoint = bucket.websiteEndpoint;
