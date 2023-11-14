import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  button {
    outline: none;
    border: none;

    cursor: pointer;
  }

  input {
    outline: none;
  }

`;

export default GlobalStyle;
