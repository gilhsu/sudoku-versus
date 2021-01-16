import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import "./App.css";
import { SudokuProvider } from "./context/SudokuContext";
import { Game } from "./Game";
import theme from "./themes/defaultTheme";
import Header from "./components/Header";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SudokuProvider>
          <Game />
        </SudokuProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
