import React from "react";

export const Button = ({
  link,
  className,
  variant,
  label,
  children,
  ...props
}) => {
  const renderClass = () => {
    switch (variant) {
      case "secondary":
        return `btn form__btn ${className || ""}`;
      case "primary":
        return `btn details-price__btn ${className || ""}`;
      default:
        break;
    }
  };

  const Element = link ? "a" : "button";

  return (
    <Element href={link} className={renderClass()} {...props}>
      {label || children}
    </Element>
  );
};
