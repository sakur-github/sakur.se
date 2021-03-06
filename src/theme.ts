import { red } from "@mui/material/colors";
import type { ThemeOptions } from "@mui/material";

// Create a theme instance.
const defaultTheme: ThemeOptions = {
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
};

export default defaultTheme;
