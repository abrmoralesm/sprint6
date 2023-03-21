import React from "react";
import { BlockBotons, SingleBotons} from  './Styled';

export const Botons = ({ increment, decrement }) => (
  <BlockBotons className="botons">
    <SingleBotons className="boto" onClick={decrement}>
      Anterior
    </SingleBotons>
    <SingleBotons className="boto" onClick={increment}>
      Següent
    </SingleBotons>
  </BlockBotons>
);