import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }    

  body {
    font-family: Poppins, Open Sans, Avenir, Roboto, system-ui;
    font-weight: 400;
    font-size: 16px;
    background: #111111;
    
  }
`;
