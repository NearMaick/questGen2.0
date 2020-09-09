import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import QuestionFind from './pages/QuestionFind';
import QuestionList from './pages/QuestionList';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/question-find" component={QuestionFind} />
      <Route path="/question-list/:id" component={QuestionList} />
    </BrowserRouter>
  );
};

export default Routes;
