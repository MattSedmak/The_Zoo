import AnimalItem from '../AnimalItem/AnimalItem';
import ErrorMsg from '../UI/ErrorMsg';
import { IAnimalDetail } from '../../models/AnimalDetail';
import { Container, Heading } from './AnimalsStyles';

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
      <Heading>Check out our animals</Heading>
      {props.error && <ErrorMsg />}
      {zooAnimals}
    </Container>
  );
};

export default Animals;
