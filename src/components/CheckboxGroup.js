import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function CheckboxGroup({ label, name, options, ...rest }) {
  return (
    <div className="field-wrap">
      <label>{label}</label> <br />
      <Field name={name} {...rest}>
        {({ field }) => {
          // console.log(field);

          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  {...field}
                  type="checkbox"
                  id={option.value}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckboxGroup;
