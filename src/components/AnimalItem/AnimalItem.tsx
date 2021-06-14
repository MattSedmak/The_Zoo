import { Link } from 'react-router-dom';
import { IAnimal } from '../../models/Animal';
import FeedBadge from '../UI/FeedBadge';

const AnimalItem = (props: IAnimal) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.shortDescription}</p>
      <FeedBadge />
      <Link to={`/animal/${props.id}`}>read more</Link>
    </div>
  );
};
export default AnimalItem;
