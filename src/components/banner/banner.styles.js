import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const textClip = keyframes`
  from {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;
export const Content = styled.div`
  font-size: 16px;
  line-height: 1;

  & > p {
    margin: 0;
  }

  & .slogan {
    font-size: 24px;
    margin: 20px 0;
  }

  & .description {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 1.5;
    text-align: end;
  }
`;

// Styled components
export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: block;
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 20px;
  animation: ${textClip} 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;

  @media (min-width: 768px) {
    font-size: 4rem;
    margin: 0 auto;
    line-height: 1.25;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BinaryCode = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
  font-size: 30px;
`;
