import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    
  }

  /* Color scheme */
  * {
    --primary: #3f51b5;
    --secondary: #f50057;
    --gray: #dedede;
    --white: #000000;
  }

  html, body, div#root {
    height: 100%;
    width: 100%;
    position: absolute;
    font-family: Arial, Helvetica, sans-serif;
    background: var(--gray);
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
