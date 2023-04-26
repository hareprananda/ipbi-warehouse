import React, { HTMLProps, useCallback, useContext, useEffect, useRef } from "react";
import { autoCompleteAdd, autoCompleteRemove } from "./AutoCompleteBuild";
import { FormContex } from "../Form";
import useStyle from "./AutoComplete.styles";

interface Props extends HTMLProps<HTMLInputElement> {
  field: string;
  options: { value: string; label: string }[];
  parentProps?: HTMLProps<HTMLDivElement>;
}

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/

const AutoCompleteField: React.FC<Props> = (props) => {
  const inputParentRef = useRef<HTMLDivElement>(null);
  const { classes } = useStyle();

  const { register, errors, setValue, state } = useContext(FormContex);

  const { field, options, parentProps, ...inputProps } = props;

  const changeVal = useCallback(
    (val: any) => {
      setValue(field, val);
    },
    [field, setValue]
  );

  useEffect(() => {
    if (!inputParentRef.current) return;
    autoCompleteAdd(inputParentRef.current.querySelector("input") as HTMLInputElement, options, changeVal);
    return () => {
      if (!inputParentRef.current) return;
      autoCompleteRemove(inputParentRef.current.querySelector("input") as HTMLInputElement, options, changeVal);
    };
  }, [options, changeVal]);

  const { onChange: _, ...registerProps } = register(field);

  useEffect(() => {
    if (state[props.field]) {
      const inputEl = inputParentRef.current?.querySelector("input") as HTMLInputElement;
      inputEl.value = options.find((v) => v.value === state[props.field])?.label as string;
    }
  }, []);

  const customOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    e.target.value = state["field"] || "";
  };

  return (
    <div {...parentProps} className={`${parentProps?.className || ""} ${classes.autocomplete}`} ref={inputParentRef}>
      <input
        {...inputProps}
        {...registerProps}
        onBlur={(e) => {
          customOnBlur(e);
          registerProps.onBlur(e);
        }}
      />
      {errors[field] && (
        <span className="text-danger">
          <small>{errors[field]?.message as string}</small>
        </span>
      )}
    </div>
  );
};

export default AutoCompleteField;
