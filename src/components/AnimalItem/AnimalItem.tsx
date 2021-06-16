import { useEffect, useState } from 'react';
import { IAnimalDetail } from '../../models/AnimalDetail';
import FeedBadge from '../UI/FeedBadge';
import { Container, Heading, StyledLink } from './AnimalItemStyles';

interface itemProps {
  animal: IAnimalDetail;
}

const AnimalItem = (props: itemProps) => {
  const [pleaseFeed, setPleaseFeed] = useState(false);

  useEffect(() => {
    let diff = new Date().getTime() - new Date(props.animal.lastFed).getTime();
    let diffHours = Math.floor(diff / (1000 * 60 * 60));
    if (diffHours >= 4) {
      setPleaseFeed(true);
    }
  }, [pleaseFeed]);

  return (
    <Container>
      <Heading>
        {props.animal.name} {pleaseFeed && <FeedBadge />}
      </Heading>
      <p>{props.animal.shortDescription}</p>
      <StyledLink to={`/animal/${props.animal.id}`}>Läs mer</StyledLink>
    </Container>
  );
};
export default AnimalItem;
