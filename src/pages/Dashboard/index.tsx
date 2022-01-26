import { Widgets } from "@mui/icons-material";
import Menu from "@mui/icons-material/Menu";
import { Avatar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AreaChartComponent from "components/AreaChart";
import BubbleCard from "components/BubbleCard";
import MiddleCard from "components/MiddleCard";
import MiniFilter, { FilterOpt } from "components/MiniFilter";
import PieChartComponent, { PieChartDataProps } from "components/PieChart";
import PrivateLayout from "modules/app/AppLayout";
import { useState } from "react";
import DashboardCardComponent from "./DashboardCardComponent";
import DashboardHeaderComponent from "./DashboardHeaderComponent";
import DashboardTable from "./DashboardTableComponent";

const dataPieChart: PieChartDataProps[] = [
    { name: "Photography", value: 300, color: "#d3019d" },
    { name: "Utility", value: 300, color: "#755efc" },
    { name: "Art", value: 400, color: "#3eebff" },
    { name: "Trading Cards", value: 150, color: "#1d7cff" },
    { name: "Collectables", value: 150, color: "#fbab31" },
];

const nftMngOpt: FilterOpt[] = [
    {
        title: "All",
    },
    {
        title: "New",
    },
    {
        title: "For Sale",
    },
];

const timeOpt: FilterOpt[] = [
    {
        title: "1d",
    },
    {
        title: "7d",
    },
    {
        title: "1m",
    },
    {
        title: "3m",
    },
    {
        title: "6m",
    },
    {
        title: "1y",
    },
    {
        title: "All",
    },
];

const middleCardData = [
    {
        title: "Bought",
        value: "85",
        footerText: "Last 90 Days",
        assetPath: "icon-nft-bought.png",
        isMetric: false,
    },
    {
        title: "Sold",
        value: "5",
        footerText: "Last 90 Days",
        assetPath: "icon-nft-sold.png",
        isMetric: false,
    },
    {
        title: "Earnings",
        value: "256",
        footerText: "ETH",
        isMetric: true,
    },
];

const DashboardPage = () => {
    const [selectedNFTMng, setSelectedNFTMng] = useState<string>("All");
    const [selectedTime, setSelectedTime] = useState<string>("All");

    return (
        <PrivateLayout miniDrawer accesToken>
            <Box
                sx={{
                    margin: "0px auto",
                    padding: "12px 90px 90px 90px",
                    width: "100%",
                }}
            >
                <DashboardHeaderComponent />

                <Box
                    style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        color="common.white"
                        style={{ margin: "25px 0px", flexGrow: 0.45 }}
                    >
                        My Stats
                    </Typography>
                    <Box style={{ display: "flex" }}>
                        {[
                            {
                                title: "My Stats",
                                iconPath: "icon-menu-stats.png",
                            },
                            {
                                title: "Explore",
                                iconPath: "icon-menu-explore.png",
                            },
                        ].map((el, index) => (
                            <Box
                                key={index + "a"}
                                style={{ display: "flex" }}
                                className={
                                    el.title === "Explore"
                                        ? "MuiCustomHeaderBoxUnselected"
                                        : "MuiCustomHeaderBox"
                                }
                            >
                                <Avatar
                                    style={{
                                        width: "16px",
                                        height: "16px",
                                        marginRight: "5px",
                                    }}
                                    src={require(`assets/${el.iconPath}`)}
                                />
                                <Typography
                                    variant="caption"
                                    color="common.white"
                                >
                                    {el.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            width: "70%",
                        }}
                    >
                        <Box
                            style={{
                                background: "#212326",
                                borderRadius: "16px",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "20px 10px",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ width: "20%", whiteSpace: "nowrap" }}
                                    color="common.white"
                                >
                                    Your Balance
                                </Typography>
                                <Box
                                    sx={{
                                        width: "40%",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        color="common.white"
                                        style={{ marginRight: "10px" }}
                                    >
                                        $29,800.65
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        style={{ color: "#00b152" }}
                                    >
                                        {" "}
                                        +2.43%
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width: "40%",
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                    }}
                                >
                                    <MiniFilter
                                        opt={timeOpt}
                                        selected={selectedTime}
                                        setSelected={setSelectedTime}
                                        style={{
                                            padding: "1px 10px",
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box>
                                <AreaChartComponent />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "25px",
                            }}
                        >
                            {middleCardData.map((el, index) => (
                                <MiddleCard
                                    key={index}
                                    style={{
                                        width: "32%",
                                        height: "120px",
                                        background: "#212326",
                                    }}
                                    title={el.title}
                                    value={el.value}
                                    footerText={el.footerText}
                                    isMetric={el.isMetric}
                                    assetPath={el.assetPath}
                                />
                            ))}
                        </Box>
                    </Box>
                    <Box
                        style={{
                            width: "25%",
                            background: "#212326",
                            borderRadius: "16px",
                            padding: "20px 10px",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ width: "20%", whiteSpace: "nowrap" }}
                            color="common.white"
                        >
                            NFT Allocation
                        </Typography>
                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <PieChartComponent data={dataPieChart} />
                        </Box>
                        <Box style={{ display: "flex", flexWrap:"wrap", padding: "0px 25px"}}>
                            {dataPieChart.map((el, index) => {
                                return (
                                    <Box
                                        key={index + el.name}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            width: "50%",
                                            padding: "10px 0px"
                                        }}
                                    >
                                        <Box
                                            style={{
                                                background: el.color,
                                                borderRadius: "100%",
                                                width: "8px",
                                                height:"8px",
                                                marginRight: "8px"
                                            }}
                                        ></Box>
                                        <Typography variant="inherit" style={{ color: "#b3b8bf"}}>{el.name}</Typography>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                </Box>
                <Typography
                    variant="h6"
                    color="common.white"
                    style={{ margin: "25px 0px" }}
                >
                    NFTs Watch List
                </Typography>
                <Box style={{ overflow: "hidden" }}>
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "25px",
                            overflowX: "scroll",
                            width: "100%",
                        }}
                    >
                        {[1, 2, 3, 4].map((el) => (
                            <BubbleCard
                                key={el}
                                style={{ background: "#212326" }}
                            />
                        ))}
                    </Box>
                </Box>

                <DashboardTable />
                <Box
                    style={{
                        display: "flex",
                        height: "24px",
                        margin: "25px 0px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Typography
                        sx={{ width: "30%" }}
                        variant="h6"
                        color="common.white"
                    >
                        NFTs Under Mangement
                    </Typography>
                    <Box sx={{ width: "30%" }}>
                        <MiniFilter
                            style={{
                                padding: "3px 35px",
                            }}
                            opt={nftMngOpt}
                            selected={selectedNFTMng}
                            setSelected={setSelectedNFTMng}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "30%",
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <IconButton>
                            <Menu sx={{ opacity: 0.4, color: "white" }} />
                        </IconButton>
                        <IconButton>
                            <Widgets sx={{ opacity: 0.4, color: "white" }} />
                        </IconButton>
                    </Box>
                </Box>
                <DashboardCardComponent />
            </Box>
        </PrivateLayout>
    );
};

export default DashboardPage;
