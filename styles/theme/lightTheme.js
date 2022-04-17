import { createTheme } from "@mui/material/styles";

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  breakpoints,
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          padding: 0,
        },
      },
    },
  },
});

export default lightTheme;
