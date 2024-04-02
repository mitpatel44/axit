import React from "react";

const sizeClasses = {
  txtRubikBold40: "font-bold font-rubik",
  txtRubikBold30: "font-bold font-rubik",
  txtRubikRegular18Gray60001: "font-normal font-rubik",
  txtRubikBold50: "font-bold font-rubik",
  txtRubikRegular20Gray600: "font-normal font-rubik",
  txtRubikBold20: "font-bold font-rubik",
  txtRubikRegular20WhiteA700: "font-normal font-rubik",
  txtRubikRegular20Yellow600: "font-normal font-rubik",
  txtRubikBold25: "font-bold font-rubik",
  txtRubikRegular17: "font-normal font-rubik",
  txtRubikRegular16: "font-normal font-rubik",
  txtRubikRegular18: "font-normal font-rubik",
  txtRubikRegular18Gray900: "font-normal font-rubik",
  txtRubikRegular15: "font-normal font-rubik",
  txtRubikRegular25: "font-normal font-rubik",
  txtRubikRegular20: "font-normal font-rubik",
  txtRubikBold40WhiteA700: "font-bold font-rubik",
  txtRubikRegular20Red500: "font-normal font-rubik",
  txtRubikBold25WhiteA700: "font-bold font-rubik",
  txtRubikRegular25Gray900: "font-normal font-rubik",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
