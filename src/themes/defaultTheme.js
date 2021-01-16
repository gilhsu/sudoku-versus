import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: grey[500],
    },
  },
});

export default theme;
