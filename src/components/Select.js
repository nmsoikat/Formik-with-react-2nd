import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Select({ label, name, options, ...rest }) {
  return (
    <div className="field-wrap">
      <label htmlFor={name}>{label}</label>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className="field-style"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
