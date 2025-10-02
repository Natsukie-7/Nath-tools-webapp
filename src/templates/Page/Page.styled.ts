import { styled } from "solid-styled-components";

export const Wrapper = styled('div')`
    :root {
        --page-color: ${({ theme }) => theme?.pageColor};
        --text-color: ${({ theme }) => theme?.textColor};
    }
`;

export const Header = styled('header')``;