import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";
import { OfflineBolt } from "@mui/icons-material";

const drawerWidth = 240;

const ClippedDrawer: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <IconButton>
                        <OfflineBolt style={{ color: "#228efd" }} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        CryptoLeague
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    background: (theme) => theme.palette.primary.main,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        background: "#212326",
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        {[
                            "Dashboard",
                            "Market intel",
                            "Competitions",
                            "Member Tools",
                        ].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon
                                            style={{ color: "#228efd" }}
                                        />
                                    ) : (
                                        <MailIcon
                                            style={{ color: "#228efd" }}
                                        />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    style={{
                                        color: "white",
                                        opacity: "0.4",
                                    }}
                                    primary={text}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {["Settings"].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon
                                            style={{ color: "#228efd" }}
                                        />
                                    ) : (
                                        <MailIcon
                                            style={{ color: "#228efd" }}
                                        />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    style={{
                                        color: "white",
                                        opacity: "0.4",
                                    }}
                                    primary={text}
                                />{" "}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            {children}
        </Box>
    );
};
export default ClippedDrawer;
