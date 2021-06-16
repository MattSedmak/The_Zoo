import styled from 'styled-components';

const Error = styled.p`
  color: palevioletred;
  font-size: 2rem;
`;

const ErrorMsg = () => {
  return <Error>Oops, something went wrong. Please try again!</Error>;
};

export default ErrorMsg;
