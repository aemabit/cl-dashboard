import React from "react";

import AppPages from "pages";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "modules/theme/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppPages />
        </ThemeProvider>
    );
}

export default App;
