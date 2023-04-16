import React, { PropsWithChildren, createContext, useEffect } from "react";
import { FieldValues, UseFormRegister, useForm, FormState, UseFormSetValue } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type ContextValue = {
  errors: FormState<FieldValues>["errors"];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

export const FormContex = createContext({} as ContextValue);

interface Props extends PropsWithChildren {
  className?: string;
  onSubmit: (values: any) => void;
  validation?: yup.ObjectSchema<any>;
  onChange?: (values: any) => void;
}

const Form: React.FC<Props> = ({ onSubmit, validation, children, className, onChange }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    mode: "onChange",
    resolver: validation && yupResolver(validation),
  });
  const state = watch();

  useEffect(() => {
    onChange?.(state);
  }, [state, onChange]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <FormContex.Provider value={{ errors: errors, register, setValue }}>{children}</FormContex.Provider>
    </form>
  );
};

export default Form;
