import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
export const getDesignTokens = (mode) => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 733,
      tablet: 768, // Custom breakpoint
      md: 1045,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#009ffcff",
          },
          secondary: {
            main: "#dcff19ff",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#90caf9",
          },
          secondary: {
            main: "#f48fb1",
          },
        }),
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // fontSize: '4rem'
        },
      },
    },
  },
});

const theme = createTheme(getDesignTokens("light"));

export default theme;
