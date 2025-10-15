import { Component } from "solid-js";
import getNavbarTranslator from "./Navbar.lang";
import {
  ToolsLink,
  ToolsLinkItem,
  ToolsLinkWrapper,
  Wrapper,
} from "./Navbar.styled";

interface NavbarProps {}

const Navbar: Component<NavbarProps> = (props) => {
  const t = getNavbarTranslator();

  return (
    <Wrapper>
      <ToolsLinkWrapper>
        <ToolsLinkItem>
          <ToolsLink href="/">{t("home")}</ToolsLink>
        </ToolsLinkItem>

        <ToolsLinkItem>
          <ToolsLink href="/document">{t("document")}</ToolsLink>
        </ToolsLinkItem>

        <ToolsLinkItem>
          <ToolsLink href="/cep">{t("cep")}</ToolsLink>
        </ToolsLinkItem>
      </ToolsLinkWrapper>
    </Wrapper>
  );
};

export default Navbar;
