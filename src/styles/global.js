import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    
}
body{
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
}
a{
    text-decoration: none;
}
button, a {
    cursor: pointer;
    transition: filter 0.2;
}
button:hover, a:hover {
    filter: brightness(0.8)
}
`;