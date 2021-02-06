import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export const Colors = {
  primary: "#3f51b5",
  selectedBackgroundColor: "#e8ecfa",
  muted: grey[700],
};

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: grey[700],
    },
    mainBackgroundColor: grey[200],
    selectBackgroundColor: "#F0F2FF",
  },
  typography: {
    fontFamily: ["Karla", "san-serif"].join(","),
  },
});

theme.typography.h1.fontWeight = 700;
theme.typography.h5.fontWeight = 700;
theme.typography.h6.fontWeight = 700;
theme.typography.body1.fontSize = "16px";

export default theme;
