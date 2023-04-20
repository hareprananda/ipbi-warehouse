import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import useStyle from "./Button.styles";

type Props = PropsWithChildren & ButtonHTMLAttributes<any>;

const Button: React.FC<Props> = (props) => {
  const { classes } = useStyle();
  const { children, className, ...buttonProps } = props;
  return (
    <button {...buttonProps} className={`${classes.buttonContainer} ${className} `}>
      {children}
    </button>
  );
};

export default Button;
