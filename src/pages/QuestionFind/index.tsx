import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { Container, SearchFormContainer, SearchIdContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Menu from '../../components/Menu';

interface QuestionFormData {
  question: string;
  listQuestionId: string;
}

const QuestionFind: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSearchSubmit = useCallback((data: QuestionFormData) => {
    console.log(data);
  }, []);

  const handleSearchIdSubmit = useCallback(
    (data: QuestionFormData) => {
      history.push(`question-list/${data.listQuestionId}`);
    },
    [history],
  );

  return (
    <Container>
      <Menu />
      <h2>Pesquisar por</h2>
      <SearchFormContainer>
        <Form ref={formRef} onSubmit={handleSearchSubmit}>
          <Input name="course" placeholder="Curso" />
          <Input name="subject" placeholder="Matéria" />
          <Input name="level" placeholder="Peso da questão" />
          <Input name="quantity" placeholder="Quantidade de questões" />
          <Button type="submit">Enviar</Button>
        </Form>
      </SearchFormContainer>
      <h2>ou</h2>
      <h2>Listar por id</h2>
      <SearchIdContainer>
        <Form ref={formRef} onSubmit={handleSearchIdSubmit}>
          <Input name="listQuestionId" placeholder="Id da lista de questões" />
          <Button type="submit">Enviar</Button>
        </Form>
      </SearchIdContainer>
    </Container>
  );
};

export default QuestionFind;
