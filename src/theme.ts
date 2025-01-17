import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: "Segoe UI",
  },
});
// para que em qualquer dispositivo fique em determinados tamanhos
theme = responsiveFontSizes(theme);
export default theme;
