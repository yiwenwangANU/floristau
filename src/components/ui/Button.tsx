const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ className, ...props }, forwardedRef) => (
  <button className={className} ref={forwardedRef} {...props} />
));

Button.displayName = "Button";

export default Button;
import React from "react";
