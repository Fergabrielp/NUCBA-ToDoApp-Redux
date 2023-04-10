import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --bg: #273142;
        --bg-container: #556270;
        --text-white: rgb( 232, 234, 237 );
        --text-dark: #191B1F;
        --text-grey: rgb( 95, 99, 104 )
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body{
        background-color: var(--bg);
        color: var(--text-white);
        font-family: 'Ubuntu', sans-serif;
    }
`

export default GlobalStyle;