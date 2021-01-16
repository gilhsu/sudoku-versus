import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./themes/defaultTheme";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
