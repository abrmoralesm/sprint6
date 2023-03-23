import { createGlobalStyle } from "styled-components";
export const BackEscenaImg = createGlobalStyle`
  body {
    background-image: url(${({text, textActive}) => text[textActive-1].img});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  }
  `;