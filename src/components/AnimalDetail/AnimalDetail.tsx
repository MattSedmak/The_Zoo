import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IAnimalDetail } from '../../models/AnimalDetail';
import FeedBadge from '../UI/FeedBadge';

interface feedProps {
  onFeedAnimal: (fed: boolean) => void;
  feed: boolean;
}

export const AnimailDetail = (props: feedProps) => {
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
  const { feed, onFeedAnimal } = props;

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
        if (diffHours >= 12 && animal.isFed === false) {
          onFeedAnimal(true);
        } else {
          onFeedAnimal(false);
        }
        setDetailedAnimal(animal);
      }
    });
  }, [id, storedAnimals, onFeedAnimal]);

  useEffect(() => {
    setStoredAnimals(storedAnimals);
    localStorage.setItem('animals', JSON.stringify(storedAnimals));
  }, [detailedAnimal, storedAnimals]);

  const feedHandler = () => {
    detailedAnimal.isFed = true;
    detailedAnimal.lastFed = new Date();
    setDetailedAnimal({ ...detailedAnimal });
    props.onFeedAnimal(false);
  };

  return (
    <div>
      {/* <img src={detailedAnimal.imageUrl} alt='' /> */}
      <p>{detailedAnimal.name}</p>
      {feed && <FeedBadge />}
      <p>Status: {detailedAnimal.isFed ? 'been fed' : 'hungry'}</p>
      <p>Matat sist: {detailedAnimal.lastFed.toString()}</p>
      <button disabled={detailedAnimal.isFed} onClick={feedHandler}>
        {detailedAnimal.isFed ? 'Is fed' : 'Feed me'}
      </button>
    </div>
  );
};
