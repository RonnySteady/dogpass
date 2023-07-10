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
      font-family: Open Sans, Avenir, Roboto;
      font-weight: 400;
      font-size: 14px;
      background: #111111;
      color: whitesmoke;
      background-image: url("/images/dogpassbg.jpg");
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  `;
