import { createGlobalStyles, styled } from "solid-styled-components";

export const GlobalStyles = createGlobalStyles`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--page-color);
    color: var(--text-color);
  }
`;

export const Wrapper = styled("div")``;

export const Header = styled("header")``;
