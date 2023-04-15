import React, { PropsWithChildren, createContext } from "react";
import { FieldValues, UseFormRegister, useForm, FormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type ContextValue = {
  errors: FormState<FieldValues>["errors"];
  register: UseFormRegister<FieldValues>;
};

export const FormContex = createContext({} as ContextValue);

interface Props extends PropsWithChildren {
  className?: string;
  onSubmit: (values: any) => void;
  validation?: yup.ObjectSchema<any>;
}

const Form: React.FC<Props> = ({ onSubmit, validation, children, className }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: validation && yupResolver(validation),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <FormContex.Provider value={{ errors: errors, register }}>{children}</FormContex.Provider>
    </form>
  );
};

export default Form;
