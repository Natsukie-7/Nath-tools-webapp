import DefaultButton from "@components/Button/Button";
import { styled } from "solid-styled-components";

export const Button = styled(DefaultButton)``;

export const PopperWrapper = styled("div")`
  display: flex;
  flex-direction: column;

  background-color: var(--menu-color);
  padding: 0.5rem;
  border-radius: 1rem;

  &[data-popper-placement^="top"] {
    ${() => Arrow.class({})} {
      transform: rotate(0deg);
      top: 100%;
    }
  }

  &[data-popper-placement^="bottom"] {
    ${() => Arrow.class({})} {
      transform: rotate(180deg);
      bottom: 100%;
    }
  }

  &[data-popper-placement^="left"] {
    ${() => Arrow.class({})} {
      transform: rotate(-90deg);
      left: 100%;
    }
  }

  &[data-popper-placement^="right"] {
    ${() => Arrow.class({})} {
      transform: rotate(90deg);
      right: 100%;
    }
  }
`;

export const Arrow = styled("div")`
  width: 10px;
  height: 10px;
  background: inherit;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

export const LanguageOption = styled(DefaultButton)`
  font-size: 0.85rem;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    background-color: var(--menu-hover-color);
  }
`;
