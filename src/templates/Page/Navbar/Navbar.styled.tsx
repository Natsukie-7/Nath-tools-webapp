import { A } from "@solidjs/router";
import { styled } from "solid-styled-components";

export const Wrapper = styled("nav")`
  grid-area: nav;

  position: sticky;
  top: 0;
  background-color: #309c71;
  border-inline: 1px solid #000;
  z-index: 10;
`;

export const ToolsLinkWrapper = styled("ul")`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ToolsLinkItem = styled("li")`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
`;

export const ToolsLink = styled(A)`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;

  color: var(--text-color, #fff);
  text-decoration: none;

  font-size: 0.95rem;
  letter-spacing: 0.3px;

  background-color: transparent;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &[aria-current="page"] {
    background-color: rgba(0, 0, 0, 0.15);
    font-weight: 600;
  }
`;
