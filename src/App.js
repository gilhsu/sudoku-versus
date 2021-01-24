import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import "./App.css";
import { SudokuProvider } from "./context/SudokuContext";
import Game from "./Game";
import theme from "./themes/defaultTheme";

import settingsReducer from "./features/settingsSlice";

const rootReducer = combineReducers({
  settings: settingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SudokuProvider>
          <Game />
        </SudokuProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
