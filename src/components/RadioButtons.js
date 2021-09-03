import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function RadioButtons({ label, name, options, ...rest }) {
  return (
    <div className="field-wrap">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          // console.log(field);

          return options.map((option) => {
            return (
              <div style={{ display: "block" }} key={option.key}>
                <input
                  {...field}
                  type="radio"
                  id={option.value}
                  value={option.value}
                  checked={option.value === field.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioButtons;
