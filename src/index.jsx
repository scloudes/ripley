import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { PeopleContextProvider } from "./context/PeopleContext";
import App from "./App";

axios.defaults.baseURL = "https://scloudes-ripley.herokuapp.com/api";

const theme = {
  colors: {
    primary: "#70578b",
    primaryLight: "#9e7edf",
    primaryDark: "#4b3c6f",
    primaryContrast: "#fff",
    primaryOpacity: "rgba(112, 87, 139, 0.5)",
    secondary: "#1a1a1a",
    secondaryContrast: "#fff",
  },
  fonts: {
    primary: "'Montserrat', sans-serif",
  },
  fontSizes: {
    body: "1rem",
    h1: "1.75rem",
    h2: "1.5rem",
    h3: "1.25rem",
    bodyMobile: "0.75rem",
    h1Mobile: "1.5rem",
    h2Mobile: "1.25rem",
    h3Mobile: "0.75rem",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <PeopleContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PeopleContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
