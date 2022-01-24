import { Avatar, Box, Typography } from "@mui/material";

export type MiddleCardProps = {
    style?: React.CSSProperties;
    title: string;
    value: string;
    footerText: string;
    image?: string;
};

const MiddleCard: React.FC<MiddleCardProps> = ({
    style = {},
    title,
    value,
    footerText,
    image,
}) => {
    return (
        <Box
            style={{
                padding: "10px 30px",
                boxSizing: "border-box",
                borderRadius: "16px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                ...style,
            }}
        >
            <Box>
                <Typography variant="h6" style={{ color: "white" }}>
                    {title}
                </Typography>
                <Typography variant="h4" style={{ color: "white" }}>
                    {value}
                </Typography>
                <Typography
                    variant="caption"
                    style={{ color: "white", opacity: "0.4" }}
                >
                    {footerText}
                </Typography>
            </Box>
            <Box>
                <Avatar
                    variant="square"
                    style={{ width: "60px", height: "60px" }}
                />
            </Box>
        </Box>
    );
};

export default MiddleCard;
