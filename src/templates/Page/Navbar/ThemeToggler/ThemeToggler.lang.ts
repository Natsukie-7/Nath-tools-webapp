import * as i18n from "@solid-primitives/i18n";
import { LangDictionaryTemplate } from "@tools/i18n/i18.lang";
import { useI18nContext } from "@tools/i18n/i18n.context";

export default function getThemeTogglerTranslator() {
  const [, { generateDict }] = useI18nContext();

  const dict = generateDict(LangDict);

  const t = i18n.translator(dict);

  return t;
}

export type ThemeTogglerDict = {
  lightTheme: string;
  darkTheme: string;
};

const PortugueseDict: ThemeTogglerDict = {
  lightTheme: "Tema claro",
  darkTheme: "Tema escuro",
};
const EnglishDict: ThemeTogglerDict = {
  darkTheme: "Dark theme",
  lightTheme: "Light theme",
};
const EspanholDict: ThemeTogglerDict = {
  darkTheme: "Tema oscuro",
  lightTheme: "Tema claro",
};
const JaponiseDict: ThemeTogglerDict = {
  darkTheme: "ダークテーマ", // "daaku teema"
  lightTheme: "ライトテーマ", // "raito teema"
};

const LangDict: LangDictionaryTemplate<ThemeTogglerDict> = {
  "pt-br": PortugueseDict,
  en: EnglishDict,
  es: EspanholDict,
  jp: JaponiseDict,
};
