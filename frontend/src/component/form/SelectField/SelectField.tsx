import React, { HTMLProps, useContext, useEffect, useRef } from "react";
import { FormContex } from "../Form";

interface Props extends HTMLProps<HTMLSelectElement> {
  field: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  parentProps?: HTMLProps<HTMLDivElement>;
  onExternalChange?: (val: string) => void;
}

const SelectField: React.FC<Props> = (props) => {
  const { errors, register, state } = useContext(FormContex);
  const { field, options, parentProps, placeholder, onExternalChange, ...inputProps } = props;
  const parentRef = useRef<HTMLDivElement>(null);

  const { onChange, ...registerProps } = register(field);

  const onChangeVal = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onExternalChange?.(e.target?.value);
    onChange(e);
  };

  useEffect(() => {
    const element = parentRef.current?.querySelector("select") as HTMLSelectElement;
    element.value = state[field] || "";
  }, [options]);

  return (
    <div {...parentProps} ref={parentRef}>
      <select defaultValue={""} {...inputProps} {...registerProps} onChange={onChangeVal}>
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
