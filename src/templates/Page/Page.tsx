import { Wrapper } from "@templates/Page/Page.styled";
import { DefaultTheme } from "@templates/Page/themes";
import { Component, createMemo, ParentComponent } from "solid-js";
import { ThemeProvider } from "solid-styled-components";

interface PageProps {}

const Page: ParentComponent = (props) => {
  const theme = createMemo(() => DefaultTheme)

  return (
    <ThemeProvider theme={theme()}>
      <Wrapper>{props.children}</Wrapper>
    </ThemeProvider>
  );
};

export default Page;
