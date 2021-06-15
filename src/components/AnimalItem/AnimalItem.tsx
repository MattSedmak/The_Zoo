import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IAnimalDetail } from '../../models/AnimalDetail';
import FeedBadge from '../UI/FeedBadge';

interface itemProps {
  isHungry: boolean;
  animal: IAnimalDetail;
}

const AnimalItem = (props: itemProps) => {
  const [pleaseFeed, setPleaseFeed] = useState(false);

  useEffect(() => {
    let diff = new Date().getTime() - new Date(props.animal.lastFed).getTime();
    let diffHours = Math.floor(diff / 1000);
    if (diffHours >= 12) {
      setPleaseFeed(true);
    }
  }, [pleaseFeed]);

  return (
    <div>
      <h3>{props.animal.name}</h3>
      <p>{props.animal.shortDescription}</p>
      {pleaseFeed && <FeedBadge />}

      <Link to={`/animal/${props.animal.id}`}>read more</Link>
    </div>
  );
};
export default AnimalItem;
