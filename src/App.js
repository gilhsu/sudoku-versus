import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import { SudokuProvider } from "./context/SudokuContext";
import { Game } from "./Game";
import theme from "./themes/defaultTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SudokuProvider>
        <Game />
      </SudokuProvider>
    </ThemeProvider>
  );
}

export default App;
