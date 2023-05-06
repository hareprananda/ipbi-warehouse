import React, { useContext } from "react";
import { FormContex } from "../Form";

interface Props {
  field: string;
  value?: boolean;
  label: string;
}

const CheckboxField: React.FC<Props> = ({ field, label }) => {
  const { register } = useContext(FormContex);
  return (
    <>
      <div className="form-check">
        <input style={{ cursor: "pointer" }} className="form-check-input" type="checkbox" {...register(field)} />
        <label className="form-check-label">{label}</label>
      </div>
    </>
  );
};

export default CheckboxField;
