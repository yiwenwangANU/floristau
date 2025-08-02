import { ComponentPropsWithoutRef, FC, ReactNode } from "react";

type ButtonProps = {
  variant?:
    | "primary"
    | "secondary"
    | "login"
    | "signup"
    | "getStart"
    | "subscribe"
    | "subscribeMonthly"
    | "mealplan";
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const baseStyles = "px-4 py-3 font-medium rounded-lg  cursor-pointer";
  let variantStyles;
  switch (variant) {
    case "primary":
      variantStyles =
        "py-3 bg-background text-foreground rounded hover:bg-yellow-600";
      break;
    case "secondary":
      variantStyles = "py-3 bg-secondary rounded-full hover:bg-secondary-hover";
      break;
    case "login":
      variantStyles =
        "px-5 text-black bg-white border border-1 border-gray-200 hover:bg-gray-100";
      break;
    case "signup":
      variantStyles = "text-white bg-emerald-500 hover:bg-emerald-600";
      break;
    case "getStart":
      variantStyles =
        "text-emerald-500 bg-white text-lg px-5 hover:bg-gray-100";
      break;
    case "subscribe":
      variantStyles =
        "py-3 bg-emerald-200 text-emerald-950 rounded hover:bg-emerald-300";
      break;
    case "subscribeMonthly":
      variantStyles =
        "py-3 bg-emerald-600 text-white rounded hover:bg-emerald-700";
      break;
    case "mealplan":
      variantStyles = "py-3 text-white rounded hover:bg-emerald-400";
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
