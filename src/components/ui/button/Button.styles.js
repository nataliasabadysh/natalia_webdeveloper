import styled, { css } from 'styled-components';

export const LinkStyle = styled.a`
  min-width: 100px;
  height: 2.5em;
  padding: 0 20px;
  border-radius: 50px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  display: flex;
  text-transform: uppercase;
  transition: transform 0.2s ease-in-out;
  will-change: transform;
  overflow: hidden;
  position: relative;
  text-decoration: none;

  &::after {
    background-color: #1a3af1;
    border-radius: 3rem;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: transform 0.1s ease-out;
    will-change: transform;
    z-index: -1;
  }

  &:hover {
    border: 2px solid transparent;
    color: #f3f4f6;
    transform: scale(1.05);
    background-color: #1a3af1;

    &::after {
      transform: translate(0, 0);
    }
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 3.5em;
  }
`;

export const ButtonStyle = styled.button`
  min-width: 100px;
  height: 2.5em;
  padding: 0 20px;
  border-radius: 50px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  display: flex;
  text-transform: uppercase;
  transition: transform 0.2s ease-in-out;
  will-change: transform;
  overflow: hidden;
  position: relative;

  &::after {
    background-color: '#1a3af1';
    border-radius: 3rem;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: transform 0.1s ease-out;
    will-change: transform;
    z-index: -1;
  }

  &:hover {
    border: 2px solid transparent;
    color: #f3f4f6;
    transform: scale(1.05);
    background-color: #1a3af1;

    &::after {
      transform: translate(0, 0);
    }
  }

  // Media query for larger screens
  @media (min-width: 768px) {
    width: 200px;
    height: 3.5em;
  }
`;
