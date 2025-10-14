import * as i18n from "@solid-primitives/i18n";
import createSafeContextProvider from "@tools/createSafeContextProvider";
import { createMemo, createSignal } from "solid-js";
import { LangDictionaryTemplate, SystemLang } from "./i18.lang";

const factory = () => {
  const [lang, setLanguage] = createSignal<SystemLang>("pt-br");

  // A tipagem precisa preservar o tipo das chaves de Dict
  const generateDict = <Dict extends i18n.BaseDict>(
    dict: LangDictionaryTemplate<Dict>
  ) =>
    createMemo(() =>
      i18n.flatten(dict[lang()])
    ) as unknown as () => i18n.Flatten<Dict>;

  const setLang = (language: SystemLang) => {
    setLanguage(language);

    const root = document.documentElement;
    root.lang = language;
  };

  const Api = {
    setLang,
    generateDict,
  };

  return [lang, Api] as const;
};

export const [i18nContextProvider, useI18nContext] =
  createSafeContextProvider(factory);
