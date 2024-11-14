import { cn } from "cn-utility";
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

type TRef = HTMLButtonElement;
type TButtonVariant = "solid" | "outline" | "ghost";
type TVariant = {
  variant?: TButtonVariant;
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TVariant;

const Button = forwardRef<TRef, TButton>(
  ({ children, className, variant, ...rest }, ref) => {
    const getVariant = (variant: TButtonVariant) => {
      switch (variant) {
        case "outline":
          return "btn btn-outline";
        case "ghost":
          return "btn btn-ghost";
        default:
          return "btn btn-solid";
      }
    };
    return (
      <button
        {...rest}
        className={cn("", getVariant(variant as TButtonVariant), className)}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export default Button;
