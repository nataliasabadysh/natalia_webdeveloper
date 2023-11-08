import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    /* margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */

    padding: 0;
    font-size: 18px;
    font-family: var(--font-nn);
    line-height: 22px;
    letter-spacing: -0.015em;
    background-color: var(--background-color);
    color: #333;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
`;
