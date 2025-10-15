import { HandleClickEvent } from "@components/Button/Button";
import { SystemKeysThemes } from "@tools/themes/constants";
import { useThemeContext } from "@tools/themes/themes.context";
import { setupTextTippy } from "@tools/tippy";
import { Accessor, Component, createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";
import getThemeTogglerTranslator, {
  ThemeTogglerDict,
} from "./ThemeToggler.lang";
import { Button, DarkThemeIcon, LightThemeIcon } from "./ThemeToggler.styled";

interface ThemeTogglerProps {}

const ThemeToggler: Component<ThemeTogglerProps> = (props) => {
  const [currentTheme, { toggleTheme }] = useThemeContext();

  const t = getThemeTogglerTranslator();

  const tippyValue = createMemo(() => t(tranlatorKeys[currentTheme()]));

  const handleClick: HandleClickEvent = async ({ loading, finish }) => {
    loading();
    toggleTheme();
    finish();
  };

  return (
    <Button handleClick={handleClick} ref={setupTippy(tippyValue)}>
      <Dynamic component={IconsComponents[currentTheme()]} />
    </Button>
  );
};

export default ThemeToggler;

const IconsComponents: Record<SystemKeysThemes, Component> = {
  light: LightThemeIcon,
  dark: DarkThemeIcon,
};

const tranlatorKeys: Record<SystemKeysThemes, keyof ThemeTogglerDict> = {
  light: "lightTheme",
  dark: "darkTheme",
};

const setupTippy = (content: Accessor<string>) => (ref: HTMLElement) => {
  setupTextTippy(ref, content, { hideOnClick: false });
};
