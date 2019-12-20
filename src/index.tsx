import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({});

/**
 * * Material UI를 사용하기 위해 MuiThemeProvider
 * * 래퍼(Wrapper)를 앱 최상단에 지정해주어야 한다.
 */

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

/**
 * For Progressive Web App
 * serviceWorker.unregister();
 */
