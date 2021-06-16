import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Animals from './components/Animals/Animals';
import axios from 'axios';
import { AnimailDetail } from './components/AnimalDetail/AnimalDetail';
import { IAnimalDetail } from './models/AnimalDetail';
import PageNotFound from './components/UI/PageNotFound';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles';

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

function App() {
  const [animals, setAnimals] = useState<IAnimalDetail[]>([]);
  const [Error, setError] = useState(false);
  const [needsFeeding, setNeedsFeeding] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('animals') === null) {
      axios
        .get<IAnimalDetail[]>('https://animals.azurewebsites.net/api/animals')
        .then((response) => {
          setAnimals(response.data);
          localStorage.setItem('animals', JSON.stringify(response.data));
        })
        .catch((error) => {
          setError(true);
        });
    } else {
      let storedAnimals = JSON.parse(localStorage.getItem('animals') || '{}');
      setAnimals(storedAnimals);
    }
  }, [needsFeeding]);

  const feedAnimalHandler = (hungry: boolean) => {
    setNeedsFeeding(hungry);
  };

  return (
    <Router>
      <GlobalStyle />
      <Heading>The Zoo</Heading>
      <Switch>
        <Route exact path='/'>
          <Animals animals={animals} error={Error} />
        </Route>
        <Route path='/animal/:id'>
          <AnimailDetail onFeedAnimal={feedAnimalHandler} feed={needsFeeding} />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
