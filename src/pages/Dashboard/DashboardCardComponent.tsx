import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CardComponent from "components/Card";

const DummyData = [
    {
        title: "Card Title Goes Here...",
        creator: "By Creator",
        purchased_price: "0.2",
        current_price: "0.3",
        nft_img_path: "bitmap4.png",
    },
    {
        title: "Card Title Goes Here...",
        creator: "By Creator",
        purchased_price: "0.2",
        current_price: "0.3",
        nft_img_path: "bitmap3.png",
    },
    {
        title: "Card Title Goes Here...",
        creator: "By Creator",
        purchased_price: "0.2",
        current_price: "0.3",
        nft_img_path: "bitmap2.png",
    },
    {
        title: "Card Title Goes Here...",
        creator: "By Creator",
        purchased_price: "0.2",
        current_price: "0.3",
        nft_img_path: "bitmap1.png",
    },
];

type CardComponentChildProps = {
    title: string;
    creator: string;
    purchased_price: string;
    current_price: string;
};

const CardComponentChild: React.FC<CardComponentChildProps> = ({
    title,
    creator,
    purchased_price,
    current_price,
}) => {
    return (
        <Box>
            <Box sx={{ marginBottom: "10px" }}>
                <Typography
                    variant="subtitle1"
                    color={"common.white"}
                    component="div"
                >
                    {title}
                </Typography>
                <Typography
                    variant="caption"
                    color={"common.white"}
                    sx={{ opacity: "0.4" }}
                >
                    {creator}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ marginRight: "8px" }}>
                    <Typography
                        variant="subtitle1"
                        color={"common.white"}
                        component="div"
                    >
                        Purchased
                    </Typography>
                    <Typography
                        variant="caption"
                        color={"common.white"}
                        sx={{ opacity: "0.4" }}
                    >
                        {purchased_price} ETH
                    </Typography>
                </Box>
                <Box sx={{ marginLeft: "8px" }}>
                    <Typography
                        variant="subtitle1"
                        color={"common.white"}
                        component="div"
                    >
                        Current Price
                    </Typography>
                    <Typography
                        variant="caption"
                        color={"common.white"}
                        sx={{ opacity: "0.4" }}
                    >
                        {current_price} ETH
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

const DashboardCardComponent = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
            }}
        >
            {DummyData.map((el, index) => {
                return (
                    <CardComponent
                        key={index}
                        height={260}
                        maxWidth={400}
                        alt="some-here"
                        src={el.nft_img_path}
                    >
                        <CardComponentChild
                            title={el.title}
                            creator={el.creator}
                            purchased_price={el.purchased_price}
                            current_price={el.current_price}
                        />{" "}
                    </CardComponent>
                );
            })}
        </Box>
    );
};

export default DashboardCardComponent;
