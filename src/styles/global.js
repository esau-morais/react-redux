import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;

    outline: none;
    -webkit-tap-highlight-color: transparent;

    box-sizing: border-box
  }

  body, html, #root {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center
  }
`;

export default Global;
