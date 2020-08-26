import React, { useState, useEffect } from 'react';
import api from './services/api';

interface Question {
  id: string;
  question: string;
  answer: string;
}

function App() {
  const[questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    api.get('/posts').then(response => { setQuestions(response.data) });
  }, []);

  return (
    <>
      {questions.map(question => (
        <>
          <h2 key={question.id}>{question.question}</h2>
          <p>{question.answer}</p>
        </>
      ))}
    </>    
  );
}

export default App;
