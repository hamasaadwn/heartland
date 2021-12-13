import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body{
    background-color: ${({ bg }) => bg};
  } 

`;

export default GlobalStyles;
