import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Link to="/">Dashboard</Link>
      <h1>Instituição</h1>
      <h1>Questões</h1>
      <Link to="/question-find">Listar</Link>
    </Container>
  );
};

export default Menu;
