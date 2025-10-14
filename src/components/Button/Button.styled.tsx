import { styled } from "solid-styled-components";

export const StyledButton = styled("button")`
  cursor: pointer;
  color: var(--text-color);

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }

  &.button--loading {
    cursor: progress;
  }

  &.button--custom {
    background-color: transparent;
    border: none;
  }
`;
