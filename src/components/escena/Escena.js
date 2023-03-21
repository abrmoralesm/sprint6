import React from "react";
import { EscenaStyled } from "./Styled";

export const Escena = ({ isActive, text}) => (
  <EscenaStyled className={`"text" ${isActive ? "backActive" : ""}`}>{text}</EscenaStyled>
);

