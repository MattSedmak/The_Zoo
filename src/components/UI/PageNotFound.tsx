import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 40em;
  width: 90%;
  margin: 5rem auto;
  text-align: center;
`;

const Heading = styled.h1`
  fontsize: 2rem;
`;

const PageNotFound = () => {
  return (
    <Wrapper>
      <Heading>You took a wrong turn, No animals here!</Heading>
      <Link to='/'>Back to the animals</Link>
    </Wrapper>
  );
};
export default PageNotFound;
