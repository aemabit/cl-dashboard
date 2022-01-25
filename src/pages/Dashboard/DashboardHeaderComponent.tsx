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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box style={{ width: "49%" }}>
                <Avatar
                    style={{ width: "260px", height: "50px" }}
                    variant="square"
                    src={require("assets/branding-house-drk.png")}
                />
                <Box style={{ display: "flex" }}>
                    {menuHeader.map((el) => (
                        <Typography
                            style={{
                                opacity: el === "NFT" ? 1 : 0.4,
                                color: "white",
                                borderBottom:
                                    el === "NFT" ? "1px solid blue" : "none",
                                margin: "0px 0px 20px",
                                padding: "8px",
                            }}
                        >
                            {el}
                        </Typography>
                    ))}
                </Box>
            </Box>
            <Box style={{ width: "49%" }}>
                <Box>
                    <Button >
                        <Avatar src={require("assets/icon-pencil.png")} />
                        <Typography>Edit House</Typography>
                    </Button>
                    <IconButton style={{ background: "#212326" }}>
                        <Badge
                            color="info"
                            badgeContent=""
                            variant="standard"
                            sx={{
                                "& .MuiBadge-badge": {
                                    fontSize: 9,
                                    height: 12,
                                    minWidth: 12,
                                },
                            }}
                        >
                            <Notifications />
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
                                    height: 12,
                                    minWidth: 12,
                                },
                            }}
                        >
                            <MessageRounded />
                        </Badge>
                    </IconButton>
                </Box>

                <Box style={{ display: "flex" }}>
                    <Box style={{ display: "flex" }}>
                        <Box>
                            <Typography>Rank</Typography>
                            <Typography>4</Typography>
                        </Box>
                        <Box>
                            <Typography>Total House</Typography>
                            <Typography>Balance</Typography>
                        </Box>
                    </Box>
                    <Divider orientation="vertical" />
                    <Box>
                        <Typography>40,535 CLT</Typography>
                    </Box>
                </Box>
            </Box>
            <Divider />
        </Box>
    );
}
