import * as i18n from "@solid-primitives/i18n";
import { LangDictionaryTemplate } from "@tools/i18n/i18.lang";
import { useI18nContext } from "@tools/i18n/i18n.context";

export default function getLanguageTogglerTranslator() {
  const [, { generateDict }] = useI18nContext();

  const dict = generateDict(LangDict);

  const t = i18n.translator(dict);

  return t;
}

type LanguageTogglerDict = {
  "pt-br": string;
  en: string;
  es: string;
  jp: string;
};

const PortugueseDict: LanguageTogglerDict = {
  "pt-br": "Português (Brasil)",
  en: "Inglês",
  es: "Espanhol",
  jp: "Japônes",
};
const EnglishDict: LanguageTogglerDict = {
  "pt-br": "Portuguese",
  en: "English",
  es: "Spanish",
  jp: "Japanese",
};
const EspanholDict: LanguageTogglerDict = {
  "pt-br": "Portugués",
  en: "Inglés",
  es: "Español",
  jp: "japonés",
};
const JaponiseDict: LanguageTogglerDict = {
  "pt-br": "ポルトガル語", // 'Porutogaru-go'
  en: "英語", // 'Eigo'
  es: "スペイン語", // 'Supeingo'
  jp: "日本語", // Nihongo
};

const LangDict: LangDictionaryTemplate<LanguageTogglerDict> = {
  "pt-br": PortugueseDict,
  en: EnglishDict,
  es: EspanholDict,
  jp: JaponiseDict,
};
