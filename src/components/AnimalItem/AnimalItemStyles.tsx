import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 1rem;
  width: 40%;
  min-width: 20rem;
  margin: 0.5rem auto;

  p {
    line-height: 1.6;
  }
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2f6760;
  font-size: 0.8rem;

  border: 1px solid #2f6760;
  border-radius: 5px;
  padding: 6px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #2f6760;
    color: white;
  }
`;
