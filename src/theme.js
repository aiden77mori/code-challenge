import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  typography: {
    fontFamily: "Underdog",
  },
  palette: {
    primary: {
      light: "#e69985",
      main: "#c2705b",
      dark: "#9e4f3a",
    },
    background: {
      paper: "#111111",
      default: "#333333",
    },
    text: {
      primary: "#ffbc7a",
    },
  },
});
