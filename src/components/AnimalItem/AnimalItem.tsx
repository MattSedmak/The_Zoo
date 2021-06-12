import { Link } from 'react-router-dom';
import { IAnimal } from '../../models/Animal';

const AnimalItem = (props: IAnimal) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.shortDescription}</p>
      <Link to={`/animal/${props.id}`}>read more</Link>
    </div>
  );
};
export default AnimalItem;
