import { type SystemTheme } from "@templates/Page/themes/constants";
import { css } from "solid-styled-components";

const ThemeValue: SystemTheme = {
  "--page-color": "#ffffff",
  "--text-color": "#000000",
};

export const DefaultTheme = css(ThemeValue as any);
