import React from 'react';
import styled from 'styled-components';
import Card from './MenuCard';

const CardGrid = () => {
  return (
    <StyledGrid>
      {Array.from({ length: 9 }).map((_, index) => (
        <Card key={index} />
      ))}
    </StyledGrid>
  );
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas por defecto */
  gap: 20px; /* Espaciado entre tarjetas */
  justify-content: center;
  padding: 20px;

  /* Ajustes para pantallas más pequeñas */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en tablets */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 columna en móviles */
  }
`;

export default CardGrid;
