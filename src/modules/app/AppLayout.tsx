import { Box } from "@mui/system";
import ClippedDrawer from "components/Nav";
import React, { ReactNode } from "react";

export type LayoutProps = {
    children?: ReactNode;
    accesToken?: boolean;
    miniDrawer?: boolean;
};

const PrivateLayout: React.FC<LayoutProps> = ({
    miniDrawer,
    accesToken,
    children,
}) => {
    return (
        <Box id="main-container">
            <ClippedDrawer>{children}</ClippedDrawer>
            {/* <Box sx={{ height: "100%", mt: "80px" }}> */}
            {/* </Box> */}
        </Box>
    );
};

export default PrivateLayout;
