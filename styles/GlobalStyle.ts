import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: black;
    }
    .default-width{
        max-width: 1140px;
        margin: 0 auto;

    }
`;

export default GlobalStyle;
