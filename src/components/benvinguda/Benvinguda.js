import React from "react";
import { Container, ContainerText, BotonStart } from "./Styled";

export const Benvinguda = ({ start }) => {
  return (
    <div>
      <Container>
        <ContainerText>
          <h1>Benvinguts a l'Sprint6</h1>
          <p>
            En aquest lliurament posarem en pràctica els conceptes bàsics que
            hem après de React.
          </p>
          <p>
            Un/a client/a que té com a producte principal una web de gestió
            empresarial desenvolupada amb React, ens ha demanat que desenvolupem
            un tutorial, en el qual mitjançant dos botons els nous usuaris
            puguin avançar i retrocedir en els consells, modificant-se el text
            d'ajuda i la imatge de fons.
          </p>
        </ContainerText>

        <BotonStart onClick={start}>Inici</BotonStart>
      </Container>
    </div>
  );
};
