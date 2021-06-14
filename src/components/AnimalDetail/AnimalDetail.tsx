import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IAnimalDetail } from '../../models/AnimalDetail';
import FeedBadge from '../UI/FeedBadge';

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
  const [needsFeeding, setNeedsFeeding] = useState(false);

  useEffect(() => {
    storedAnimals.map((animal) => {
      if (animal.id === Number(id)) {
        let diff = new Date().getTime() - new Date(animal.lastFed).getTime();
        let diffHours = Math.floor(diff / 1000);

        if (diffHours >= 10) {
          animal.isFed = false;
          localStorage.setItem('animals', JSON.stringify(storedAnimals));
          setDetailedAnimal(animal);
        }
        if (diffHours >= 12) {
          setNeedsFeeding(true);
        }
        setDetailedAnimal(animal);
      }
    });
  }, [id, storedAnimals]);

  useEffect(() => {
    setStoredAnimals(storedAnimals);
    localStorage.setItem('animals', JSON.stringify(storedAnimals));
  }, [detailedAnimal, storedAnimals]);

  const feedHandler = () => {
    detailedAnimal.isFed = true;
    detailedAnimal.lastFed = new Date();
    setDetailedAnimal({ ...detailedAnimal });
    setNeedsFeeding(false);
  };

  return (
    <div>
      {/* <img src={detailedAnimal.imageUrl} alt='' /> */}
      <p>{detailedAnimal.name}</p>
      {needsFeeding && <FeedBadge />}
      <p>Status: {detailedAnimal.isFed ? 'been fed' : 'hungry'}</p>
      <p>Matat sist: {detailedAnimal.lastFed.toString()}</p>
      <button disabled={detailedAnimal.isFed} onClick={feedHandler}>
        {detailedAnimal.isFed ? 'Is fed' : 'Feed me'}
      </button>
    </div>
  );
};
