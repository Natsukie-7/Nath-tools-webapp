import { SystemThemes } from "@templates/Page/themes";
import { createEffectOn } from "@tools/createEffectOn";
import createSafeContextProvider from "@tools/createSafeContextProvider";
import { createMemo, createSignal } from "solid-js";

type KeyTheme = keyof typeof SystemThemes;

const factory = () => {
  const [themeIdentifier, setThemeIdentifier] =
    createSignal<KeyTheme>("theme-dark");

  const toggleTheme = (theme?: KeyTheme) =>
    setThemeIdentifier(
      (prev) =>
        theme ?? (prev === "theme-dark" ? "theme-default" : "theme-dark")
    );

  createEffectOn(themeIdentifier, (newTheme) => {
    const html = document.documentElement;

    Object.keys(SystemThemes).forEach((key) => {
      html.classList.remove(key);
    });

    html.classList.add(newTheme);
  });

  // memo com o objeto do tema selecionado
  const theme = createMemo(() => SystemThemes[themeIdentifier()]);

  return [theme, { toggleTheme }] as const;
};

export const [ThemesContextProvider, useThemeContext] =
  createSafeContextProvider(factory);
