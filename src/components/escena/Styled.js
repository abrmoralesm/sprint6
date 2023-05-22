import styled from "styled-components";

export const Escenas = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EscenaStyled = styled.div`
  margin: 0.9rem 2rem;
  padding: 1rem;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.3rem;
  text-align: center;
  border: 0.2rem solid #2f2e2e;
  border-radius: 2rem;
  background-color: rgba(253, 252, 252, 0.5);

  &.backActive {
    background-color: #dfa0bb;
    color: #000;
  }
`;
