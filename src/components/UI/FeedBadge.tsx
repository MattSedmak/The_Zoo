import styled from 'styled-components';

const Badge = styled.sup`
  background-color: palevioletred;
  padding: 4px;
  border-radius: 20px;
  color: white;
  font-size: 0.7rem;
  font-weight: 400;
`;

const FeedBadge = () => {
  return <Badge>Hungrig</Badge>;
};
export default FeedBadge;
