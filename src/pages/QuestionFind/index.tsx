import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface QuestionFormData {
  question: string;
}

const QuestionFind: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: QuestionFormData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <h1>Bem vindo, professor Maick Souza</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="question" placeholder="Digite sua pesquisa aqui" />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default QuestionFind;
