import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';

interface Question {
  id: string;
  question: string;
  answer: string;
}

const Dashboard: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    api.get('/essayQuestions').then(response => {
      setQuestions(response.data);
    });
  }, []);

  const handleAddQuestion = useCallback(() => {
    api.post('/essayQuestions', {
      id: questions.length + 1,
      question,
      answer: 'outro teste',
    });
  }, [question, questions]);

  return (
    <>
      {questions.map(essayQuestion => (
        <li key={essayQuestion.id}>
          <h2>{essayQuestion.question}</h2>
        </li>
      ))}
      <form onSubmit={handleAddQuestion}>
        <input
          type="text"
          name="question"
          value={question}
          onChange={e => {
            setQuestion(e.target.value);
          }}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Dashboard;
