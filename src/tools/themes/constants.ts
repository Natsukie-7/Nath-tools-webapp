import { SystemThemes } from ".";

export interface SystemTheme {
  pageColor: string;
  textColor: string;

  menuColor: string;
  menuHoverColor: string;
}

export type SystemKeysThemes = keyof typeof SystemThemes;
