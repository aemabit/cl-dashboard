import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export type CardComponentProps = {
    imgUrl: string;
    height?: string | number;
    alt?: string;
    maxWidth?: number;
    children?: React.ReactNode;
    style?: React.CSSProperties;
};

const CardComponent: React.FC<CardComponentProps> = ({
    imgUrl,
    alt,
    height = 180,
    maxWidth = 345,
    children,
    style,
}) => {
    return (
        <Card sx={{ maxWidth: maxWidth, ...style }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={height}
                    image={imgUrl}
                    alt={alt}
                />
                {children && <CardContent style={{ background: "#212326"}}>{children}</CardContent>}
            </CardActionArea>
        </Card>
    );
};

export default CardComponent;
