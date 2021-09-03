import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input({ label, name, ...rest }) {
  return (
    <div className="field-wrap">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} className="field-style" />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
