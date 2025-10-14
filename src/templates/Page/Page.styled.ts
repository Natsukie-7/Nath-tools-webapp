import { createGlobalStyles, styled } from "solid-styled-components";

export const GlobalStyles = createGlobalStyles`
  :root {
    --primary: #1D4ED8; 
    --success: #16A34A;
    --danger:  #DC2626;  
    --warning: #F59E0B;  
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: var(--page-color);
    color: var(--text-color);
  }
`;

export const Wrapper = styled("div")``;

export const Header = styled("header")``;
