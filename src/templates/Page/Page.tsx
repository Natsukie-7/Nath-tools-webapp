import { Wrapper } from "@templates/Page/Page.styled";
import {
  ThemesContextProvider,
  useThemeContext,
} from "@templates/Page/themes.context";
import { onCleanup, onMount, ParentComponent } from "solid-js";

interface PageProps {}

const Page: ParentComponent = (props) => {
  return (
    <ThemesContextProvider>
      {(() => {
        const [theme, { toggleTheme }] = useThemeContext();

        /* onMount(() => {
          const interval = setInterval(toggleTheme, 1000);
          onCleanup(() => {
            clearInterval(interval);
          });
        }); */

        return <Wrapper class={theme()}>{props.children}</Wrapper>;
      })()}
    </ThemesContextProvider>
  );
};

export default Page;
