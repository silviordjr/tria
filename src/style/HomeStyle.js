import fundoHome from '../img/fundo_home.jpg'
import styled, { keyframes } from 'styled-components'
import { blackTwo, yellowOne, yellowTwo } from './constants';

export const MainHome = styled.div`
    background-image: url(${fundoHome});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -13vh;
    min-height: 100vh;
    margin-top: -13vh;
`

export const blinkTextCursor = keyframes`
  from {border-right-color: ${yellowOne};}
  to {border-right-color: transparent}
`;

export const TextCursor = styled.span`
  border-right: 2px solid ${yellowOne};
  display: inline;

  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

export const Container = styled.div`
  display: inline-flex;
  margin: 0;
  margin-top: 20vh;
  margin-left: 4vw;
  margin-right: 4vw;
  text-align: center;
  color: ${yellowTwo};
  font-family: 'Big Shoulders Stencil Display', cursive;
  font-size: 6em;
`;