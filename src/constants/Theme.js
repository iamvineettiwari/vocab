import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#5d1049",
            light: "#9e7092",
            dark: "#4e0d3a"
        },
        secondary: {
            main: "#e93651",
            light: "#f49ba8",
            dark: "#e30425"
        }
    },
    typography: {
        fontFamily: "'Kumbh Sans', sans-serif",
    }
});

export default theme