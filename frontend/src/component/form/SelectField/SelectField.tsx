import React, { HTMLProps, useContext } from "react";
import { FormContex } from "../Form";

interface Props extends HTMLProps<HTMLSelectElement> {
  field: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  parentProps?: HTMLProps<HTMLDivElement>;
}

const SelectField: React.FC<Props> = (props) => {
  const { errors, register } = useContext(FormContex);
  const { field, options, parentProps, placeholder, ...inputProps } = props;

  return (
    <div {...parentProps}>
      <select defaultValue={""} {...inputProps} {...register(field)}>
        <option value="">{placeholder}</option>
        {options.map((v, key) => (
          <option key={key} value={v.value}>
            {v.label}
          </option>
        ))}
      </select>
      {errors[field] && (
        <span className="text-danger">
          <small>{errors[field]?.message as string}</small>
        </span>
      )}
    </div>
  );
};

export default SelectField;
