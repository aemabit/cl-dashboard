import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#212326',
        },
        secondary: {
            main: '#228efd',
        },
        common: {
            black: '#000',
            white: '#fff',
        },
        info: {
            main: '#42a5f5',
        },
        error: {
            main: red.A400,
        },
        success: {
            main: "#00b152"
        }
    },
});

export default theme;
