import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Animals from './components/Animals/Animals';

import { AnimailDetail } from './components/AnimalDetail/AnimalDetail';

function App() {
  return (
    <Router>
      <h1>The Zoo</h1>
      <Switch>
        <Route exact path='/'>
          <Animals />
        </Route>
        <Route path='/animal/:id'>
          <AnimailDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
