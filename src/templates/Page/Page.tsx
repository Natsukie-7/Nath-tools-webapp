import { GlobalStyles, Wrapper } from "@templates/Page/Page.styled";
import {
  ThemesContextProvider,
  useThemeContext,
} from "@tools/themes/themes.context";
import { onCleanup, onMount, ParentComponent } from "solid-js";

interface PageProps {}

const Page: ParentComponent = (props) => {
  return (
    <Wrapper>
      <GlobalStyles />
      {props.children}
    </Wrapper>
  );
};

export default Page;
