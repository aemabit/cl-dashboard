import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardHeader } from "@mui/material";

export type BubbleCardProps = {
    imgUrl?: string;
    height?: string | number;
    alt?: string;
    maxWidth?: number;
    children?: React.ReactNode;
    style?: React.CSSProperties;
};

const BubbleCard: React.FC<BubbleCardProps> = ({
    imgUrl,
    alt,
    height = 180,
    maxWidth = 340,
    style,
}) => {
    return (
        <Card sx={{ width: maxWidth, ...style }}>
            <CardHeader
                sx={{ color: "white" }}
                avatar={
                    <Avatar src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/KA6QZAPJ73GKRERDDS4S552AIE.jpg" />
                }
                action={
                    <Box>
                        <Typography
                            variant="subtitle2"
                            sx={{ color: "#00b152", paddingTop: "20px" }}
                        >
                            +54.36%
                        </Typography>
                    </Box>
                }
                title="Collection Name"
                subheader={
                    <Typography variant="caption" sx={{ color: "#ebf2fa" }}>
                        $5,799
                    </Typography>
                }
            />
        </Card>
    );
};

export default BubbleCard;
