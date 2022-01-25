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
import { Avatar, IconButton } from "@mui/material";
import { OfflineBolt } from "@mui/icons-material";

const drawerWidth = 240;

const drawerMenuPrimary = [
    {
        routePath: "",
        title: "Dashboard",
        iconPath: "icon-menu-link-1.png",
    },
    {
        routePath: "",
        title: "Market Intel",
        iconPath: "icon-menu-link-2.png",
    },
    {
        routePath: "",
        title: "Community",
        iconPath: "icon-menu-link-3.png",
    },
    {
        routePath: "",
        title: "Competitions",
        iconPath: "icon-menu-link-4.png",
    },
    {
        routePath: "",
        title: "Member Tools",
        iconPath: "icon-menu-link-5.png",
    },
];

const drawerMenuSecondary = [
    {
        routePath: "",
        title: "Settings",
        iconPath: "icon-menu-link-6.png",
    },
];

const drawerMenuFooter = [
    {
        routePath: "",
        title: "Account",
        iconPath: "icon-menu-link-7.png",
    },
    {
        routePath: "",
        title: "Logout",
        iconPath: "icon-menu-link-8.png",
    },
];

const ClippedDrawer: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    background: "transparent",
                    boxShadow: "none",
                }}
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
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                    }}
                >
                    <Box
                        sx={{
                            overflow: "auto",
                        }}
                    >
                        <List>
                            {drawerMenuPrimary.map((el, index) => (
                                <ListItem
                                    style={
                                        el.title === "Dashboard"
                                            ? { background: "#2A2E32" }
                                            : { background: "transparent" }
                                    }
                                    button
                                    key={el.title}
                                >
                                    <ListItemIcon>
                                        <Avatar
                                            style={{
                                                width: "21px",
                                                height: "21px",
                                            }}
                                            src={require(`assets/${el.iconPath}`)}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        style={
                                            el.title === "Dashboard"
                                                ? { color: "white" }
                                                : {
                                                      color: "white",
                                                      opacity: "0.4",
                                                  }
                                        }
                                        primary={el.title}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {drawerMenuSecondary.map((el, index) => (
                                <ListItem
                                    style={
                                        el.title === "Dashboard"
                                            ? { background: "#2A2E32" }
                                            : { background: "transparent" }
                                    }
                                    button
                                    key={el.title}
                                >
                                    <ListItemIcon>
                                        <Avatar
                                            style={{
                                                width: "21px",
                                                height: "21px",
                                            }}
                                            src={require(`assets/${el.iconPath}`)}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        style={
                                            el.title === "Dashboard"
                                                ? { color: "white" }
                                                : {
                                                      color: "white",
                                                      opacity: "0.4",
                                                  }
                                        }
                                        primary={el.title}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <List>
                        {drawerMenuFooter.map((el, index) => (
                            <ListItem
                                style={
                                    el.title === "Dashboard"
                                        ? { background: "#2A2E32" }
                                        : { background: "transparent" }
                                }
                                button
                                key={el.title}
                            >
                                <ListItemIcon>
                                    <Avatar
                                        style={{
                                            width: "21px",
                                            height: "21px",
                                        }}
                                        src={require(`assets/${el.iconPath}`)}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    style={
                                        el.title === "Dashboard"
                                            ? { color: "white" }
                                            : {
                                                  color: "white",
                                                  opacity: "0.4",
                                              }
                                    }
                                    primary={el.title}
                                />
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
