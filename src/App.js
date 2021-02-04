import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import "./App.css";
// import Game from "./Game";
import Game from "./components/mock/Game";
import theme from "./themes/defaultTheme";

import settingsReducer from "./features/settingsSlice";
import gameReducer from "./features/gameSlice";

const rootReducer = combineReducers({
  settings: settingsReducer,
  game: gameReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Game />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
