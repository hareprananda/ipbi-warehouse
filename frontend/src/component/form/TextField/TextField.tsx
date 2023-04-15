import React, { useContext, HTMLProps } from "react";
import { FormContex } from "../Form";
import useStyle from "./TextField.style";

interface Props extends HTMLProps<HTMLInputElement> {
  field: string;
  parentProps?: HTMLProps<HTMLDivElement>;
}

const TextField: React.FC<Props> = (props) => {
  const { classes } = useStyle();
  const { field, parentProps, ...inputProps } = props;
  const { errors, register } = useContext(FormContex);

  return (
    <div {...parentProps} className={`${parentProps?.className || ""} ${classes.inputContainer}`}>
      <input {...register(field)} {...inputProps} />
      {errors[field] && (
        <span className="text-danger">
          <small>{errors[field]?.message as string}</small>
        </span>
      )}
    </div>
  );
};

export default TextField;
