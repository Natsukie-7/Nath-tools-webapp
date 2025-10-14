import {
  Accessor,
  Component,
  ComponentProps,
  createMemo,
  createSignal,
  JSX,
  mergeProps,
  splitProps,
} from "solid-js";
import { StyledButton } from "./Button.styled";

export type ButtonVariant = "custom";

export type HandleClickEvent = (
  utils: { finish: () => void; loading: () => void },
  event: MouseEvent,
  settings: { isLoading: Accessor<boolean> }
) => void | Promise<void>;

interface ButtonProps extends ComponentProps<"button"> {
  handleClick?: HandleClickEvent;
  variant?: ButtonVariant;
}

const defaultProps: Partial<ButtonProps> = {
  handleClick: () => {},
  variant: "custom",
};

const Button: Component<ButtonProps> = (rawProps) => {
  const [localProps, buttonProps] = splitProps(
    mergeProps(defaultProps, rawProps),
    ["handleClick", "variant", "children"]
  );

  const [isLoading, setIsLoading] = createSignal<boolean>(false);

  const buttonClass = createMemo(() => {
    const elementClass = [];

    if (localProps.variant) {
      elementClass.push(`button--${localProps.variant}`);
    }

    if (buttonProps.class) {
      elementClass.push(buttonProps.class);
    }

    if (isLoading()) {
      elementClass.push("button--loading");
    }

    return elementClass.join(" ");
  });

  const loading = () => setIsLoading(true);
  const finish = () => setIsLoading(false);

  const handleClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = async (
    event
  ) => {
    if (!localProps.handleClick) {
      return;
    }

    if (isLoading()) {
      return;
    }

    await localProps.handleClick({ loading, finish }, event, { isLoading });
  };

  return (
    <StyledButton
      {...buttonProps}
      class={buttonClass()}
      onClick={handleClick}
      disabled={buttonProps.disabled || isLoading()}
    >
      {localProps.children}
    </StyledButton>
  );
};

export default Button;
