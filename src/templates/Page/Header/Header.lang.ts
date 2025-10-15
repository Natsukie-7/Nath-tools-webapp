import * as i18n from "@solid-primitives/i18n";
import { LangDictionaryTemplate } from "@tools/i18n/i18.lang";
import { useI18nContext } from "@tools/i18n/i18n.context";

export default function getHeaderTranslator() {
  const [, { generateDict }] = useI18nContext();

  const dict = generateDict(LangDict);

  const t = i18n.translator(dict);

  return t;
}

type HeaderDict = {
  document: string;
  cep: string;
};

const PortugueseDict: HeaderDict = {
  document: "documento",
  cep: "CEP",
};
const EnglishDict: HeaderDict = {
  document: "document",
  cep: "Brasilian CEP",
};
const EspanholDict: HeaderDict = {
  document: "documento",
  cep: "CP",
};
const JaponiseDict: HeaderDict = {
  document: "書類", // "shorui"
  cep: "郵便番号", // "Yūbin bangō"
};

const LangDict: LangDictionaryTemplate<HeaderDict> = {
  "pt-br": PortugueseDict,
  en: EnglishDict,
  es: EspanholDict,
  jp: JaponiseDict,
};
