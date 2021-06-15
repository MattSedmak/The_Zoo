import AnimalItem from '../AnimalItem/AnimalItem';
import ErrorMsg from '../UI/ErrorMsg';
import { IAnimalDetail } from '../../models/AnimalDetail';

interface animalProps {
  animals: IAnimalDetail[];
  error: boolean;
  feed: boolean;
}

const Animals = (props: animalProps) => {
  let zooAnimals = props.animals.map((animal) => {
    return <AnimalItem key={animal.id} animal={animal} isHungry={props.feed} />;
  });

  return (
    <div>
      <h3>Here are the animals</h3>
      {props.error && <ErrorMsg />}
      {zooAnimals}
    </div>
  );
};

export default Animals;
