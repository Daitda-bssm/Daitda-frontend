import { createGlobalStyle } from "styled-components";
import { C } from "./color";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    background-color: ${C.white};
  }

  html {
    font-size: 10px;
  }

  button {
    outline: none;
    border: none;

    cursor: pointer;
  }

`;

export default GlobalStyle;
