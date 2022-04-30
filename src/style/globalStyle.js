
import { createGlobalStyle } from 'styled-components';
import { blackOne, pink } from './constants';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background-color: ${blackOne};
    color: ghostwhite;
    min-height: 100vh;
  }
  code {
    font-family: 'Roboto', sans-serif;
  }
`;
export default GlobalStyle