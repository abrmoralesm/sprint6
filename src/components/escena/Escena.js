import React from "react";
import { Escenas, EscenaStyled } from "./Styled";

export const Escena = ({ textActive, text }) => (
  <Escenas className="escenes">
    {text.map((element) => (
      <EscenaStyled
        key={element.id}
        className={`"text" ${textActive === element.id ? "backActive" : ""}`}>
        {element.text}
      </EscenaStyled>
    ))}
  </Escenas>
);
