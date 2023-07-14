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
      font-family: Open Sans, Avenir, Roboto, Poppins, system-ui;
      font-weight: 400;
      font-size: 16px;
      background: #222222;
      color: #333333;
      background-image: url("/images/dogpassbg.jpg");
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  `;
