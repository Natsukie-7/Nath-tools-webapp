import { SystemThemes } from "@tools/themes";
import { createEffectOn } from "@tools/createEffectOn";
import createSafeContextProvider from "@tools/createSafeContextProvider";
import { createMemo, createSignal } from "solid-js";

type KeyTheme = keyof typeof SystemThemes;

const factory = () => {
  const [currentTheme, setCurrentTheme] = createSignal<KeyTheme>("dark");

  const toggleTheme = (theme?: KeyTheme) =>
    setCurrentTheme((prev) => {
      if (theme) {
        return theme;
      }

      const keys = Object.keys(SystemThemes) as KeyTheme[];

      const currentIndex = keys.indexOf(prev);
      const nextIndex = (currentIndex + 1) % keys.length;

      return keys[nextIndex];
    });

  const theme = createMemo(() => SystemThemes[currentTheme()]);

  createEffectOn(currentTheme, (newTheme) => {
    const root = document.documentElement;
    if (!root) return;

    Object.keys(SystemThemes).forEach((key) =>
      root.classList.remove(`theme-${key}`)
    );
    root.classList.add(`theme-${newTheme}`);

    let styleEl = document.getElementById(
      "theme-styles"
    ) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "theme-styles";
      document.head.appendChild(styleEl);
    }

    const sheet = styleEl.sheet!;
    while (sheet.cssRules.length > 0) {
      sheet.deleteRule(0);
    }

    const current = SystemThemes[newTheme];
    const vars = Object.entries(current)
      .map(([key, value]) => `${camelToCssVariable(key)}: ${value};`)
      .join("");

    sheet.insertRule(`:root { ${vars} }`, 0);
  });

  return [currentTheme, { toggleTheme }, theme] as const;
};

export const [ThemesContextProvider, useThemeContext] =
  createSafeContextProvider(factory);

function camelToCssVariable(key: string) {
  return "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase();
}
