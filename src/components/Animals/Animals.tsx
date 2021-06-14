import { useState, useEffect } from 'react';
import axios from 'axios';
import AnimalItem from '../AnimalItem/AnimalItem';
import { IAnimal } from '../../models/Animal';
import ErrorMsg from '../UI/ErrorMsg';

const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('animals') === null) {
      axios
        .get<IAnimal[]>('https://animals.azurewebsites.net/api/animals')
        .then((response) => {
          setAnimals(response.data);
          localStorage.setItem('animals', JSON.stringify(response.data));
        })
        .catch((error) => {
          setIsError(true);
        });
    } else {
      let storedAnimals = JSON.parse(localStorage.getItem('animals') || '{}');
      setAnimals(storedAnimals);
    }
  }, []);

  let zooAnimals = animals.map((animal) => {
    return (
      <AnimalItem
        key={animal.id}
        id={animal.id}
        name={animal.name}
        shortDescription={animal.shortDescription}
      />
    );
  });

  return (
    <div>
      <h3>Here are the animals</h3>
      {isError && <ErrorMsg />}
      {zooAnimals}
    </div>
  );
};

export default Animals;
