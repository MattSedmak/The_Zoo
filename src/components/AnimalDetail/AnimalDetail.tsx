import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IAnimalDetail } from '../../models/AnimalDetail';

export const AnimailDetail = () => {
  interface Iparams {
    id: string;
  }
  let { id } = useParams<Iparams>();

  const initialState = {
    id: 0,
    name: '',
    shortDescription: '',
    latinName: '',
    longDescription: '',
    imageUrl: '',
    medicine: '',
    isFed: false,
    lastFed: new Date(),
  };

  let animalsFromLs = JSON.parse(localStorage.getItem('animals') || '{}');
  const [storedAnimals, setStoredAnimals] = useState<IAnimalDetail[]>(animalsFromLs);
  const [detailedAnimal, setDetailedAnimal] = useState<IAnimalDetail>(initialState);

  useEffect(() => {
    storedAnimals.map((animal) => {
      if (animal.id === Number(id)) {
        setDetailedAnimal(animal);
      }
    });
  }, [id, storedAnimals]);

  useEffect(() => {
    setStoredAnimals(storedAnimals);
    localStorage.setItem('animals', JSON.stringify(storedAnimals));
    console.log(storedAnimals);
  }, [detailedAnimal, storedAnimals]);

  useEffect(() => {
    if (detailedAnimal.isFed === true) {
      let timeout = setTimeout(() => {
        detailedAnimal.isFed = false;
        setDetailedAnimal({ ...detailedAnimal });
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [detailedAnimal]);

  const feedHandler = () => {
    detailedAnimal.isFed = true;
    detailedAnimal.lastFed = new Date();
    setDetailedAnimal({ ...detailedAnimal });
  };

  return (
    <div>
      {/* <img src={detailedAnimal.imageUrl} alt='' /> */}
      <p>{detailedAnimal.name}</p>
      <p>Status: {detailedAnimal.isFed ? 'been fed' : 'hungry'}</p>
      <p>Matat sist: {detailedAnimal.lastFed.toString()}</p>
      <button disabled={detailedAnimal.isFed} onClick={feedHandler}>
        {detailedAnimal.isFed ? 'Is fed' : 'Feed me'}
      </button>
    </div>
  );
};
