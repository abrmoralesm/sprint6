import styled from "styled-components";
import { SingleBotons } from "../botons/Styled";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 60vw;
  height: 450px;
  border: 0.2rem solid #000;
  border-radius: 1rem;
  background: #eeaeca;
  background: radial-gradient(
    circle,
    #db9ab6 0%,
    #94bbe9 100%
  );
`;

export const ContainerText = styled.div`
  text-align: center;
  & h1 {
    margin-bottom: 2.5rem;
    font-size: 3.1rem;
  }
  & p {
    margin: 2rem 0;
    font-size: 1.5rem;
    text-align: justify;
  }
`;

export const BotonStart = styled(SingleBotons)`
  width: 20vw;
  padding: 0.5rem;
`;
