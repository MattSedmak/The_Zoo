import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #1e1e1e;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 1rem;

  p {
    line-height: 1.6;
  }
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: blue;
  font-size: 0.8rem;

  border: 1px solid blue;
  border-radius: 5px;
  padding: 6px;
  transition: all 0.3s ease;
  &:hover {
    background-color: blue;
    color: white;
  }
`;
