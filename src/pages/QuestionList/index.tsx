import React from 'react';
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
  // const [result, setResult] = useState([]);

  const { id } = useParams();

  return (
    <Container>
      <Menu />
      {/* {result.map((essayQuestion, index) => (
        <li key={index}>
          <h2>{essayQuestion}</h2>
        </li>
      ))} */}
    </Container>
  );
};

export default QuestionList;
