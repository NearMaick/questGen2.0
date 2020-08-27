import React, { useState, useEffect, useCallback } from 'react';
import api from './services/api';
interface Question {
  id: string;
  question: string;
  answer: string;
}

function App() {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);  

  useEffect(() => {
    api.get('/questions').then(response => { setQuestions(response.data) });
  }, []);

  const handleAddQuestion = useCallback(() => {   
    
    api.post('/questions', { id: questions.length + 1, question, answer: 'outro teste' });
  }, [question, questions]);

  return (
    <>
      {questions.map(question => (
        <li key={question.id}>
          <h2 >{question.question}</h2>
          <p>{question.answer}</p>
        </li>
      ))}
      <form onSubmit={handleAddQuestion}>
        <input 
          type="text" 
          name="question" 
          value={question} 
          onChange={(e) => {setQuestion(e.target.value)}}
        />
        <button type="submit">Enviar</button>
      </form>      
    </>    
  );
}

export default App;
