import {
  ContextProvider,
  ContextProviderProps,
  createContextProvider,
} from "@solid-primitives/context";

export default function createSafeContextProvider<
  Value,
  Props extends ContextProviderProps
>(factory: (props: Props) => Value): [ContextProvider<Props>, () => Value] {
  const [Provider, useCtx] = createContextProvider(factory);

  function useSafeContext() {
    const ctx = useCtx();

    if (!ctx) {
      throw new Error(
        `Context not found. Did you forget to wrap your app in the corresponding Provider?`
      );
    }

    return ctx;
  }

  return [Provider, useSafeContext];
}
