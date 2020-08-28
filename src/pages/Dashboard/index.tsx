import React from 'react';
// import api from '../../services/api';

import { Link } from 'react-router-dom';
import { Container } from './styles';

interface Question {
  id: string;
  question: string;
  answer: string;
}

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Bem vindo, professor Maick Souza</h1>
      <h2>Para cadastrar uma questão no sistema</h2>
      <h2>
        <Link to="/question-find">Para listar uma questão no sistema;</Link>
      </h2>
      <h2>Para cadastrar o logo e a instituição no sistema;</h2>
    </Container>
  );
};

export default Dashboard;
