import { createEffect, onCleanup } from "solid-js";
import tippy, { Instance, Props } from "tippy.js";

export interface TippyOptions {
  disabled?: boolean;
  hidden?: boolean;
  props?: Partial<Props>;
}

export const setupTextTippy = <T extends Element>(
  elementProp: T,
  contentProp: string | (() => string),
  props?: Partial<Props>
): Instance => {
  const getElement =
    typeof elementProp === "function" ? elementProp : () => elementProp;
  const getContent =
    typeof contentProp === "function" ? contentProp : () => contentProp;

  const tip = tippy(getElement(), { ...props, content: getContent() });

  if (typeof contentProp == "function") {
    createEffect(() => {
      tip.setContent(getContent());
    });
  }

  onCleanup(() => tip.destroy());

  return tip;
};
