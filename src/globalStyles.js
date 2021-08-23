import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box; 
    }

    html, body {
        /* overflow-x: hidden; */
        padding: 0;
        margin: 0;
        
    }
    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #F5E1D3; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #2F4F4F; 
    }

    
`;

export default GlobalStyle;
