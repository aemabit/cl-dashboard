import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router";
import { Typography } from "@mui/material";
import { OfflineBolt } from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    background: `${theme.palette.primary}`,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

type MiniDrawerProps = {
    handleMiniDrawer: () => void;
    openMiniDrawer: boolean;
    miniDrawerOptions: MiniDrawerOption[];
};

export type MiniDrawerOption = {
    title: string;
    icon: React.ReactNode;
    path: string;
};

const MiniDrawer: React.FC<MiniDrawerProps> = ({
    handleMiniDrawer,
    openMiniDrawer,
    miniDrawerOptions,
}) => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleRoute = (path: string) => {
        navigate(path);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Drawer variant="permanent" open={openMiniDrawer}>
                <DrawerHeader style={{ background: "#212326", height: "40px" }}>
                    <Box
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Box>
                            <IconButton>
                                <OfflineBolt color="secondary" />
                            </IconButton>
                        </Box>
                        <Typography variant="subtitle2" color={"common.white"}>
                            CryptoLeague
                        </Typography>
                    </Box>
                    <IconButton onClick={handleMiniDrawer}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon color="secondary" />
                        ) : (
                            <ChevronLeftIcon color="secondary" />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List style={{ background: "#212326", height: "100%" }}>
                    {miniDrawerOptions.map((opt) => (
                        <ListItem
                            button
                            key={opt.title}
                            onClick={() => handleRoute(opt.path)}
                        >
                            <ListItemIcon style={{color: "white", opacity: 0.4}}>{opt.icon}</ListItemIcon>
                            <ListItemText style={{color: "white", opacity: 0.4}} primary={opt.title} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default MiniDrawer;
