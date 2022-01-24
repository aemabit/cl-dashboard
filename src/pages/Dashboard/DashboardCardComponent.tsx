import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CardComponent from "components/Card";

const CardComponentChild = () => {
    return (
        <Box>
            <Box sx={{ marginBottom: "10px" }}>
                <Typography
                    variant="subtitle1"
                    color={"common.white"}
                    component="div"
                >
                    The Komodo dragon
                </Typography>
                <Typography
                    variant="caption"
                    color={"common.white"}
                    sx={{ opacity: "0.4" }}
                >
                    Is the largest living lizard in the world.
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
                        Komodo dragon
                    </Typography>
                    <Typography
                        variant="caption"
                        color={"common.white"}
                        sx={{ opacity: "0.4" }}
                    >
                        Is the largest
                    </Typography>
                </Box>
                <Box sx={{ marginLeft: "8px" }}>
                    <Typography
                        variant="subtitle1"
                        color={"common.white"}
                        component="div"
                    >
                        The dragon
                    </Typography>
                    <Typography
                        variant="caption"
                        color={"common.white"}
                        sx={{ opacity: "0.4" }}
                    >
                        Living lizard in the world.
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
            {[1, 2, 3, 4].map((el) => {
                return (
                    <CardComponent
                        key={el}
                        height={260}
                        maxWidth={400}
                        alt="some-here"
                        imgUrl="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/10/25/16351831527188.jpg"
                    >
                        <CardComponentChild />
                    </CardComponent>
                );
            })}
        </Box>
    );
};

export default DashboardCardComponent;
