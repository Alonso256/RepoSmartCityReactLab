import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <StyledWrapper>
      <motion.div
        className="e-card"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="infotop"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          MINDFULNESS
          <br />
          <motion.div
            className="name"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            very demure
          </motion.div>
        </motion.div>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.header` 

position: fixed; /* Fija el header en la parte superior */
  top: 0;
  left: 0;
  width: 100%; /* Ocupa todo el ancho */
  z-index: 1000; /* Asegura que esté sobre otros elementos */
  background-color: white; /* Define un fondo para visibilidad */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Añade una sombra sutil */
  padding: 1rem;

  .e-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .infotop {
    text-align: center;
    font-size: 24px; /* Tamaño de fuente más grande para el título */
    font-weight: bold;
  }

  .name {
    font-size: 16px;
    font-weight: normal;
  }
`;

export default Header;
