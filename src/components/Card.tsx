import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export type CardComponentProps = {
    imgUrl?: string;
    height?: string | number;
    alt?: string;
    maxWidth?: number;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    src?: string;
};

const CardComponent: React.FC<CardComponentProps> = ({
    imgUrl,
    alt,
    height = 180,
    maxWidth = 345,
    children,
    style,
    src,
}) => {
    return (
        <Card sx={{ width: "23%", ...style }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={height}
                    image="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/10/25/16351831527188.jpg"
                    alt={alt}
                />
                {children && (
                    <CardContent style={{ background: "#212326" }}>
                        {children}
                    </CardContent>
                )}
            </CardActionArea>
        </Card>
    );
};

export default CardComponent;
