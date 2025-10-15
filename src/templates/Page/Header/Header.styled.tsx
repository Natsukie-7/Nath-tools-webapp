import { A } from "@solidjs/router";
import { styled } from "solid-styled-components";

export const Wrapper = styled("header")`
  grid-area: header;

  position: sticky;
  background-color: #456055;
  padding: 1rem;

  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ToolsLinkWrapper = styled("nav")`
  display: flex;
  gap: 1rem;
`;

export const ToolsLinkItem = styled("li")`
  align-content: center;
`;

export const ToolsLink = styled(A)`
  color: var(--text-color);
  text-decoration: none;
`;
