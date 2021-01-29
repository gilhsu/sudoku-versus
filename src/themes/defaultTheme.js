import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: grey[500],
    },
    mainBackgroundColor: grey[200],
    selectBackgroundColor: "#F0F2FF",
  },
});

theme.typography.h5.fontWeight = 700;

export default theme;
