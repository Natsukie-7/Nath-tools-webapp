import { type SystemTheme } from "@templates/Page/themes/constants";
import { css } from "solid-styled-components";

const ThemeValue: SystemTheme = {
  "--page-color": "#000000",
  "--text-color": "#ffffff",
};

export const DarkTheme = css(ThemeValue as any);
