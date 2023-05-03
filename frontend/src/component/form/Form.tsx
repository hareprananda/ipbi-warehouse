import React, { PropsWithChildren, createContext, useEffect, useImperativeHandle } from "react";
import { FieldValues, UseFormRegister, useForm, FormState, UseFormSetValue } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type ContextValue = {
  errors: FormState<FieldValues>["errors"];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  state: Record<string, any>;
};

export const FormContex = createContext({} as ContextValue);

interface Props extends PropsWithChildren {
  className?: string;
  onSubmit: (values: any) => void;
  validation?: yup.ObjectSchema<any>;
  onChange?: (values: any) => void;
  defaultValues?: Record<string, any>;
}

export interface FormRef {
  getValue(field: string): any;
}

const Form = React.forwardRef<FormRef, Props>(
  ({ onSubmit, validation, children, className, onChange, defaultValues }, ref) => {
    const {
      handleSubmit,
      register,
      formState: { errors },
      setValue,
      getValues,
      watch,
    } = useForm({
      mode: "onChange",
      resolver: validation && yupResolver(validation),
      defaultValues,
    });
    const state = watch();

    useEffect(() => {
      onChange?.(state);
    }, [state, onChange]);

    useImperativeHandle(ref, () => ({
      getValue: getValues,
    }));

    return (
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        <FormContex.Provider value={{ errors: errors, register, setValue, state }}>{children}</FormContex.Provider>
      </form>
    );
  }
);

Form.displayName = "Form";

export default Form;
