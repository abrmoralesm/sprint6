import styled from "styled-components";

export const BlockBotons = styled.div`
  text-align: center;
  margin: 1.2rem;
`;

export const SingleBotons = styled.button`
  width: 47vw;
  margin: 0.6rem;
  padding: 1.5rem;
  font-size: 2rem;
  border: 0.1rem solid #000;
  border-radius: 1rem;
  &:hover {
    background-color: #e7c1d2;
  }
  &:active {
    outline: 0.1rem solid #000;
  }
`;
