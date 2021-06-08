import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

    * {
        box-sizing: border-box;
    }

    body,
    html {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: "Raleway", sans-serif;
    }

    #root {
        height: 100%;
        width: 100%;
    }

    ul,
    li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    button {
        outline: none;
        border: 1px solid transparent;
        padding: 0;
    }

`;

export const AppWrapp = styled.div`
  height: 100%;
  width: 100%;
`;
