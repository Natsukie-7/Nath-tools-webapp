import { createEffect, on, Accessor } from "solid-js";

/**
 * Atalho para createEffect(on(...))
 * @param sources Sinal ou lista de sinais
 * @param fn Callback chamado quando algum dos sinais mudar
 * @param defer Se true, ignora a execução inicial
 */
export function createEffectOn<T>(
  sources: Accessor<T>,
  fn: (value: T) => void,
  defer = false
) {
  return createEffect(on(sources, fn, { defer }));
}
