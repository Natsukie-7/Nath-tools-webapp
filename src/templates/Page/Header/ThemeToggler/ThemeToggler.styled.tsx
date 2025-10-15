import DefaultButton from "@components/Button/Button";
import MoonIcon from "@icons/MoonIcon";
import SunIcon from "@icons/SunIcon";
import { styled } from "solid-styled-components";

export const Button = styled(DefaultButton)`
  margin-inline-start: auto;
`;

export const LightThemeIcon = styled(SunIcon)`
  width: 2rem;
  fill: #ffffff;
`;

export const DarkThemeIcon = styled(MoonIcon)`
  width: 2rem;
  fill: var(--warning);
`;
