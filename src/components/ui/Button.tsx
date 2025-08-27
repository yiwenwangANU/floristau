import { ComponentPropsWithoutRef, FC, ReactNode } from "react";

type ButtonProps = {
  variant?:
    | "primary"
    | "secondary"
    | "login"
    | "signup"
    | "create"
    | "subscribe"
    | "subscribeMonthly"
    | "buyNow"
    | "addToCart";
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const baseStyles = "px-4 font-medium cursor-pointer";
  let variantStyles;
  switch (variant) {
    case "primary":
      variantStyles =
        "py-3 bg-background text-foreground rounded hover:bg-yellow-600";
      break;
    case "secondary":
      variantStyles =
        "py-2 text-sm bg-secondary rounded-full hover:bg-secondary-hover";
      break;
    case "login":
      variantStyles =
        "px-5 text-black bg-white border border-1 border-gray-200 hover:bg-gray-100";
      break;
    case "signup":
      variantStyles = "text-white bg-emerald-500 hover:bg-emerald-600";
      break;
    case "create":
      variantStyles =
        "text-white bg-primary text-lg px-5 hover:bg-primary-hover";
      break;
    case "subscribe":
      variantStyles =
        "py-3 bg-emerald-200 text-emerald-950 rounded hover:bg-emerald-300";
      break;
    case "subscribeMonthly":
      variantStyles =
        "py-3 bg-emerald-600 text-white rounded hover:bg-emerald-700";
      break;
    case "buyNow":
      variantStyles =
        "w-full py-3 my-10 bg-primary-hover text-white font-medium tracking-wide hover:bg-primary";
      break;
    case "addToCart":
      variantStyles =
        "w-full py-3 my-10 bg-stone-300 font-medium tracking-wide hover:bg-stone-400";
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
