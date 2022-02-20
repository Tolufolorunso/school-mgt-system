import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { AppProvider } from "./context/appContext";
import theme from "./theme/theme"

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
