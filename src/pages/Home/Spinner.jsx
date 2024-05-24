import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 100%;
  width: 500px;
`;

const SpinnerCircle = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #363CD5;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s ease-in-out infinite;
`;

const Spinner = () => (
  <SpinnerWrapper>
    <SpinnerCircle />
  </SpinnerWrapper>
);

export default Spinner;