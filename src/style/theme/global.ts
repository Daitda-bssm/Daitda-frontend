import { createGlobalStyle } from "styled-components";
import { C } from "@/style/theme";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    display: none;
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

  a {
    text-decoration: none;
    color: ${C.black};
  }

`;

export default GlobalStyle;
