import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box; 
        scroll-behavior: smooth;
    }

    html, body {
        /* overflow-x: hidden; */
        padding: 0;
        margin: 0;  
    }
    

    
`;

export default GlobalStyle;
