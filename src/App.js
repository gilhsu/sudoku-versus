import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import { SudokuProvider } from "./context/SudokuContext";
import { Game } from "./Game";
import theme from "./themes/defaultTheme";
import { SettingsProvider } from "./context/SettingsContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SudokuProvider>
        <SettingsProvider>
          <Game />
        </SettingsProvider>
      </SudokuProvider>
    </ThemeProvider>
  );
}

export default App;
