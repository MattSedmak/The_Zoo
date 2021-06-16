import styled from 'styled-components';

export const Container = styled.div`
  max-width: 45rem;
  width: 90%;
  margin: 2rem auto;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 60%;
`;

export const Name = styled.h3`
  font-size: 2rem;
`;

export const Description = styled.p`
  font-weight: 400;
  line-height: 1.6;
  margin: 1.5rem 0;
`;

export const Button = styled.button`
  width: 150px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #2f6760;
  background-color: #2f6760;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.6;
  }
`;
