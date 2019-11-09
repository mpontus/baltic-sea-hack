import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#092d50",
      paper: "#3a5773"
    },
    text: {
      hint: "#fff"
    },
    primary: {
      main: "#1568A1"
    },
    secondary: {
      main: "#fd3347"
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: "#fff",
        "&$focused": {
          color: "#fff"
        }
      }
    }
  }
});
