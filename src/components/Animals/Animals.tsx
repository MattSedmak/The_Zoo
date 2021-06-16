import AnimalItem from '../AnimalItem/AnimalItem';
import ErrorMsg from '../UI/ErrorMsg';
import { IAnimalDetail } from '../../models/AnimalDetail';
import { Container } from './AnimalsStyles';

interface animalProps {
  animals: IAnimalDetail[];
  error: boolean;
}

const Animals = (props: animalProps) => {
  let zooAnimals = props.animals.map((animal) => {
    return <AnimalItem key={animal.id} animal={animal} />;
  });

  return (
    <Container>
      {props.error && <ErrorMsg />}
      {zooAnimals}
    </Container>
  );
};

export default Animals;
