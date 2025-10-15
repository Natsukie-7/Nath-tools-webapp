import { HandleClickEvent } from "@components/Button/Button";
import { Options } from "@popperjs/core";
import { createEffectOn } from "@tools/createEffectOn";
import { SystemLang, SystemLangValues } from "@tools/i18n/i18.lang";
import { useI18nContext } from "@tools/i18n/i18n.context";
import {
  Accessor,
  Component,
  createSignal,
  For,
  onCleanup,
  Setter,
  Show,
} from "solid-js";
import usePopper from "solid-popper";
import getLanguageTogglerTranslator from "./LanguageToggler.lang";
import {
  Arrow,
  Button,
  LanguageOption,
  PopperWrapper,
} from "./LanguageToggler.styled";

interface LanguageTogglerProps {}

const LanguageToggler: Component<LanguageTogglerProps> = (props) => {
  const [lang, { setLang }] = useI18nContext();

  const t = getLanguageTogglerTranslator();

  const [isOpen, setIsOpen] = createSignal<boolean>(false);

  const [anchor, setAnchor] = createSignal<HTMLElement>();
  const [popper, setPopper] = createSignal<HTMLElement>();
  const [popperArrow, setPopperArrow] = createSignal<HTMLElement>();

  const popperInstance = usePopper(anchor, popper, PopperOptions(popperArrow));

  const handleClick: HandleClickEvent = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLanguageClick =
    (language: SystemLang): HandleClickEvent =>
    () => {
      setLang(language);

      const instance = popperInstance();
      if (!instance) {
        return;
      }

      instance.update();
    };

  createEffectOn(isOpen, setupCloseEvents(anchor, popper, setIsOpen));

  return (
    <>
      <Button
        handleClick={handleClick}
        ref={setAnchor}
        aria-expanded={isOpen()}
        aria-haspopup="listbox"
      >
        {t(lang())}
      </Button>

      <Show when={isOpen()}>
        <PopperWrapper ref={setPopper} role="listbox">
          <Arrow data-popper-arrow ref={setPopperArrow} />

          <For each={SystemLangValues}>
            {(language) => (
              <LanguageOption
                handleClick={handleLanguageClick(language)}
                disabled={lang() === language}
                role="option"
                aria-selected={lang() === language}
              >
                {t(language)}
              </LanguageOption>
            )}
          </For>
        </PopperWrapper>
      </Show>
    </>
  );
};

export default LanguageToggler;

const PopperOptions = (
  arrowElement: Accessor<HTMLElement | undefined>
): Partial<Options> => ({
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 15],
      },
    },
    {
      name: "preventOverflow",
      options: {
        padding: 10,
      },
    },
    {
      name: "arrow",
      options: {
        element: arrowElement(),
      },
    },
  ],
});

export const setupCloseEvents =
  (
    anchor: Accessor<HTMLElement | undefined>,
    popper: Accessor<HTMLElement | undefined>,
    setIsOpen: Setter<boolean>
  ) =>
  (isOpen: boolean) => {
    if (!isOpen) return;

    const anchorElement = anchor();
    const popperElement = popper();

    if (!anchorElement || !popperElement) return;

    const controller = new AbortController();

    document.addEventListener(
      "click",
      (e: MouseEvent) => {
        if (
          anchorElement.contains(e.target as Node) ||
          popperElement.contains(e.target as Node)
        ) {
          return;
        }
        setIsOpen(false);
      },
      { signal: controller.signal }
    );

    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key !== "Escape") {
          return;
        }
        setIsOpen(false);
      },
      { signal: controller.signal }
    );

    onCleanup(() => controller.abort());
  };
