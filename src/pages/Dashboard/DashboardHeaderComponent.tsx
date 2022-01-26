import { MessageRounded, Notifications } from "@mui/icons-material";
import {
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    IconButton,
    Typography,
} from "@mui/material";

const menuHeader = ["Overview", "Crypto", "NFT"];

export default function DashboardHeaderComponent() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "170px",
                borderBottom: "1px solid #666F7A",
            }}
        >
            <Box style={{ width: "49%" }}>
                <Box
                    style={{
                        height: "100px",
                        display: "flex",
                        alignItems: "flex-end",
                        marginBottom: "20px",
                    }}
                >
                    <Avatar
                        style={{ width: "260px", height: "50px" }}
                        variant="square"
                        src={require("assets/branding-house-drk.png")}
                    />
                </Box>
                <Box style={{ display: "flex", height: "70px" }}>
                    {menuHeader.map((el) => (
                        <Typography
                            key={el}
                            style={{
                                opacity: el === "NFT" ? 1 : 0.4,
                                color: "white",
                                borderBottom:
                                    el === "NFT" ? "2px solid #328eff" : "none",
                                margin: "0px 0px 20px",
                                padding: "8px",
                                cursor: "pointer",
                            }}
                        >
                            {el}
                        </Typography>
                    ))}
                </Box>
            </Box>
            <Box
                style={{
                    width: "49%",
                    display: "flex",
                    alignItems: "flex-end",
                    flexDirection: "column",
                }}
            >
                <Box>
                    <Button variant="contained" color="info">
                        <Avatar
                            src={require("assets/icon-pencil.png")}
                            variant="square"
                            style={{
                                width: "25px",
                                height: "25px",
                                marginRight: "8px",
                            }}
                        />
                        <Typography
                            style={{ fontSize: "10px", color: "white" }}
                        >
                            Edit House
                        </Typography>
                    </Button>
                    <IconButton
                        style={{ background: "#212326", margin: "8px" }}
                    >
                        <Badge
                            color="info"
                            badgeContent=""
                            variant="standard"
                            sx={{
                                "& .MuiBadge-badge": {
                                    fontSize: 9,
                                    height: 10,
                                    minWidth: 10,
                                    top: 2,
                                    right: 4,
                                },
                            }}
                        >
                            <Notifications
                                style={{ color: "rgba(204, 207, 216, 0.39)" }}
                            />
                        </Badge>
                    </IconButton>
                    <IconButton style={{ background: "#212326" }}>
                        <Badge
                            color="info"
                            badgeContent=""
                            variant="standard"
                            sx={{
                                "& .MuiBadge-badge": {
                                    fontSize: 9,
                                    height: 10,
                                    minWidth: 10,
                                    top: 2,
                                    right: 4,
                                },
                            }}
                        >
                            <MessageRounded
                                style={{ color: "rgba(204, 207, 216, 0.39)" }}
                            />
                        </Badge>
                    </IconButton>
                </Box>

                <Box
                    style={{
                        display: "flex",
                        marginTop: "25px",
                        padding: "5px",
                        borderRadius: "16px",
                        alignItems: "flex-end",
                        background: "#212326",
                        width: "300px",
                    }}
                >
                    <Box style={{ display: "flex", width: "50%" }}>
                        <Box
                            style={{
                                background: "#3eebff",
                                borderRadius: "8px",
                                width: "46px",
                                height: "46px",
                                padding: "5px",
                                boxSizing: "border-box",
                                textAlign: "center",
                                marginRight: "20px",
                            }}
                        >
                            <Typography
                                fontSize={12}
                                style={{ fontWeight: "bold" }}
                            >
                                Rank
                            </Typography>
                            <Typography
                                fontSize={18}
                                style={{ fontWeight: "bold", marginTop: -5 }}
                            >
                                4
                            </Typography>
                        </Box>
                        <Box
                            style={{
                                width: "50%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                variant="caption"
                                style={{ color: "white" }}
                            >
                                Total House
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                style={{ fontWeight: "bold", color: "white" }}
                            >
                                Balance
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        style={{
                            border: "solid 1px rgba(204, 207, 216, 0.38)",
                            height: "30px",
                            margin: "auto 6px",
                        }}
                    />
                    <Box
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            width: "45%",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h6"
                            style={{ fontWeight: "bold", color: "white" }}
                        >
                            40,535 CLT
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Divider />
        </Box>
    );
}
