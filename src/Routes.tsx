import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import QuestionFind from './pages/QuestionFind';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/question-find" exact component={QuestionFind} />
    </BrowserRouter>
  );
};

export default Routes;
