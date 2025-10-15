import { Component } from "solid-js";
import getHeaderTranslator from "./Header.lang";
import {
  ToolsLink,
  ToolsLinkItem,
  ToolsLinkWrapper,
  Wrapper,
} from "./Header.styled";
import LanguageToggler from "./LanguageToggler/LanguageToggler";
import ThemeToggler from "./ThemeToggler/ThemeToggler";

interface HeaderProps {}

const Header: Component<HeaderProps> = (props) => {
  const t = getHeaderTranslator();

  return (
    <Wrapper>
      <ToolsLinkWrapper>
        <ToolsLinkItem>
          <ToolsLink href="/">Nath tools</ToolsLink>
        </ToolsLinkItem>
      </ToolsLinkWrapper>

      <ThemeToggler />
      <LanguageToggler />
    </Wrapper>
  );
};

export default Header;
