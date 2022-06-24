import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { typography } from "../theme/typography";
import { button } from "../theme/components/button";
import { fiiled_input } from "../theme/components/input";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5B43EF",
      white: "#ffffff",
      black: "#000000",
      gray: "#666F7B",
    },
    kakao: {
      main: "#FEE500",
    },
    secondary: {
      main: "#ffffff",
    },
    third: {
      main: "#F7F5FF",
    },
    button_gray: {
      main: "#C5C8CD",
    },
    gray: {
      main: "#FDFDFD",
      scale2: "#F7F8F9",
      scale3: "#F1F3F4",
      scale4: "#E9EBEE",
      scale5: "#C5C8CD",
      scale6: "#89929E",
      scale7: "#666F7B",
      scale8: "#3A4552",
      scale9: "#2A323B",
      scale10: "#171D23",
    },

    dark_gray: {
      main: "#89929E",
    },
    white: {
      main: "#ffffff",
    },
    red: { main: "#C14327" },
    black: {
      main: "#000000",
    },
    green: {
      main: "#17A214",
    },
    error: {
      main: red.A400,
    },
  },
  typography: typography,
  components: {
    MuiButton: button,
    MuiFilledInput: fiiled_input,
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "unset",
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 460,
      md: 900,
      lg: 1280,
      xl: 30000,
    },
  },
});

export default theme;
