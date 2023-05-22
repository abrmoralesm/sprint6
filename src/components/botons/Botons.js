import React from "react";
import { BlockBotons, SingleBotons } from "./Styled";

export const Botons = ({ increment, decrement }) => (
  <BlockBotons className="botons">
    <SingleBotons onClick={decrement}>Anterior</SingleBotons>
    <SingleBotons onClick={increment}>Següent</SingleBotons>
  </BlockBotons>
);
