/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';
import Menu from '../../components/Menu';

interface Question {
  course_id: number;
  id: number;
  level: number;
  question: string;
  subject_id: number;
}

const QuestionList: React.FC = () => {
  const [listQuestions, setListQuestions] = useState<Question[]>([]);
  const { id } = useParams();

  useEffect(() => {
    async function loadListQuestions() {
      const questionsIds = await api.get(`/questionsGenerate/${id}`);
      const listQuestionsIds = questionsIds.data.essayQuestion;
      const identifiers = listQuestionsIds.map(
        (idQuestion: { id: string }) => idQuestion.id,
      );
      const list = identifiers.map(
        async (questionId: number): Promise<Question> => {
          const response = await api.get(`/essayQuestions/${questionId}`);
          return response.data;
        },
      );
      Promise.all(list).then((values: any[]) => setListQuestions(values));
    }
    loadListQuestions();
  }, [id]);

  return (
    <Container>
      <Menu />
      {listQuestions.map((question, index) => {
        return (
          <div key={index}>
            <h3>{question.question}</h3>
          </div>
        );
      })}
    </Container>
  );
};

export default QuestionList;
