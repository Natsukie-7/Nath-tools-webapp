import { Component } from "solid-js";
import LanguageToggler from "./LanguageToggler/LanguageToggler";
import getNavbarTranslator from "./Navbar.lang";
import {
  ToolsLink,
  ToolsLinkItem,
  ToolsLinkWrapper,
  Wrapper,
} from "./Navbar.styled";
import ThemeToggler from "./ThemeToggler/ThemeToggler";

interface NavbarProps {}

const Navbar: Component<NavbarProps> = (props) => {
  const t = getNavbarTranslator();

  return (
    <Wrapper>
      <ToolsLinkWrapper>
        <ToolsLinkItem>
          <ToolsLink href="/">Nath tools</ToolsLink>
        </ToolsLinkItem>

        <ToolsLinkItem>
          <ToolsLink href="/document">{t("document")}</ToolsLink>
        </ToolsLinkItem>

        <ToolsLinkItem>
          <ToolsLink href="/cep">{t("cep")}</ToolsLink>
        </ToolsLinkItem>
      </ToolsLinkWrapper>
      <ThemeToggler />
      <LanguageToggler />
    </Wrapper>
  );
};

export default Navbar;
