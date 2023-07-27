import React, { useContext, HTMLProps } from "react";
import { FormContex } from "../Form";
import useStyle from "./TextAreaField.style";

interface Props extends HTMLProps<HTMLTextAreaElement> {
  field: string;
  prefix?: string;
  parentProps?: HTMLProps<HTMLDivElement>;
}

const TextAreaField: React.FC<Props> = (props) => {
  const { classes } = useStyle();
  const { field, parentProps, ...inputProps } = props;
  const { errors, register } = useContext(FormContex);

  return (
    <div {...parentProps}>
      {props.prefix ? (
        <span className="input-group-text" style={{ backgroundColor: "transparent", border: "none", paddingLeft: 0 }}>
          {props.prefix}
        </span>
      ) : null}
      <textarea
        {...register(field)}
        {...inputProps}
        className={(inputProps.className || "") + " " + classes.textArea}
        rows={4}
      />
      {errors[field] && (
        <span className="text-danger">
          <small>{errors[field]?.message as string}</small>
        </span>
      )}
    </div>
  );
};

export default TextAreaField;
