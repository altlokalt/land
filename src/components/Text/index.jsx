import React from "react";

const variantClasses = {
  h1: "font-semibold text-[9px]",
  h2: "font-bold sm:text-[48px] md:text-[48px] text-[60px]",
  h3: "sm:text-[38px] md:text-[44px] text-[48px]",
  h4: "font-normal sm:text-[34px] md:text-[40px] text-[44px]",
  h5: "font-medium sm:text-[36px] md:text-[38px] text-[40px]",
  h6: "font-bold sm:text-[32px] md:text-[34px] text-[36px]",
  body1: "font-bold sm:text-[30px] md:text-[32px] text-[34px]",
  body2: "font-bold sm:text-[28px] md:text-[30px] text-[32px]",
  body3: "font-normal sm:text-[26px] md:text-[28px] text-[30px]",
  body4: "sm:text-[25px] md:text-[27px] text-[29px]",
  body5: "font-medium sm:text-[24px] md:text-[26px] text-[28px]",
  body6: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  body7: "font-bold sm:text-[18px] md:text-[20px] text-[22px]",
  body8: "text-[20px]",
  body9: "text-[18px]",
  body10: "text-[16px]",
  body11: "text-[15px]",
  body12: "text-[14px]",
  body13: "text-[13px]",
  body14: "text-[12px]",
  body15: "text-[11px]",
  body16: "font-semibold text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
