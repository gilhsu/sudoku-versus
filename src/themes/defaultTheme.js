import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      label: {
        color: "gray",
      },
    },
  },
});

export default theme;
