import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;0,900;1,300&display=swap')

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Monteserrat', sans-serif;
    }

    body{
        background: #eee;
    }

    button,
    input{
        outline: 0;
    }

    button{
        cursor: pointer;
    }
`;