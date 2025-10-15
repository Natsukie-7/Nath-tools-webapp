import * as i18n from "@solid-primitives/i18n";
import { LangDictionaryTemplate } from "@tools/i18n/i18.lang";
import { useI18nContext } from "@tools/i18n/i18n.context";

export default function getNavbarTranslator() {
  const [, { generateDict }] = useI18nContext();

  const dict = generateDict(LangDict);

  const t = i18n.translator(dict);

  return t;
}

type NavbarDict = {
  home: string;
  document: string;
  cep: string;
};

const PortugueseDict: NavbarDict = {
  home: "Página inicial",
  document: "Documentos",
  cep: "CEP",
};
const EnglishDict: NavbarDict = {
  home: "home",
  document: "Document",
  cep: "Brasilian CEP",
};
const EspanholDict: NavbarDict = {
  home: "inicio",
  document: "Documentos",
  cep: "CP",
};
const JaponiseDict: NavbarDict = {
  home: "ホーム", // "Hōmu"
  document: "書類", // "shorui"
  cep: "郵便番号", // "Yūbin bangō"
};

const LangDict: LangDictionaryTemplate<NavbarDict> = {
  "pt-br": PortugueseDict,
  en: EnglishDict,
  es: EspanholDict,
  jp: JaponiseDict,
};
