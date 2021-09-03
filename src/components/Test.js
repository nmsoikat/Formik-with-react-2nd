import {
  Formik,
  Form,
  Field,
  FieldArray,
  FastField,
  ErrorMessage,
} from "formik";
import { useState } from "react";
import TextError from "./TextError";

function Test() {
  const [formData, setFormData] = useState(null);

  const initialValues = {
    name: "",
    age: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumber: ["", ""],
    phNumbers: [""],
    ex1: "",
  };

  const savedValues = {
    name: "Rohim Mia",
    age: "55",
    social: {
      facebook: "ddd",
      twitter: "ddd",
    },
    phoneNumber: ["", ""],
    phNumbers: ["015--------"],
    ex1: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "required";
    }

    if (!values.age) {
      errors.age = "required";
    }
    return errors;
  };

  const ex1Validate = (value) => {
    let error = "";
    if (!value) {
      error = "required";
    }

    return error;
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    // console.log("onSubmitProps", onSubmitProps);
    const { setSubmitting } = onSubmitProps;
    setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <div className="form-container  st-3">
      <h2 className="form-caption text-center">Practice Today</h2>

      {/*
       * onChange, onBlur, and submit. Formik error detection work automatically
       * we can control it on change, and blur
       */}

      <Formik
        initialValues={formData || initialValues}
        enableReinitialize
        onSubmit={onSubmit}
        validate={validate}
        // validateOnBlur={false}
        // validateOnChange={false}
        // validateOnMount
      >
        {(formik) => {
          console.log(formik);
          return (
            <Form>
              {/* 
              ---------------------------------------------
              Field component with render-props pattern 
              ---------------------------------------------
          */}
              <div className="field-wrap">
                <label htmlFor="name">Name</label>
                <Field name="name">
                  {(props) => {
                    const { field, form, meta } = props;

                    return (
                      <div>
                        <input
                          type="text"
                          id="name"
                          {...field}
                          placeholder="your name please"
                          className="field-style"
                        />
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </Field>
              </div>

              {/* 
          ---------------------------------------------
          FastField component 
          ---------------------------------------------
          */}
              <div className="field-wrap">
                <label htmlFor="age">Age</label>
                <FastField name="age">
                  {(props) => {
                    const { field, form, meta } = props;

                    return (
                      <div>
                        <input
                          type="text"
                          id="age"
                          {...field}
                          placeholder="your age please"
                          className="field-style"
                        />
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </FastField>
              </div>

              {/* 
          ------------------------------
            Working on Nested Object 
          -----------------------------
          */}
              <div className="field-wrap">
                <label htmlFor="facebook">Facebook</label>
                <Field
                  id="facebook"
                  name="social.facebook"
                  className="field-style"
                />
              </div>
              <div className="field-wrap">
                <label htmlFor="twitter">Twitter</label>
                <Field
                  id="twitter"
                  name="social.twitter"
                  className="field-style"
                />
              </div>

              {/* Working on Array */}
              <div className="field-wrap">
                <label htmlFor="phonePr">Phone Number one</label>
                <Field
                  id="phonePr"
                  name="phoneNumber[0]"
                  className="field-style"
                />
              </div>
              <div className="field-wrap">
                <label htmlFor="phoneSe">Phone Number optional</label>
                <Field
                  id="phoneSe"
                  name="phoneNumber[1]"
                  className="field-style"
                />
              </div>

              {/* 
            -----------------------------------------
            Dynamic form control using FieldArray Component 
            --------------------------------------------
          */}
              <div className="field-wrap">
                <label htmlFor="phNumbers">Phone Numbers (dynamic) </label>
                <FieldArray name="phNumbers">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;

                    // console.log(fieldArrayProps);

                    return (
                      <div>
                        {phNumbers.map((item, index) => (
                          <div key={index}>
                            <Field
                              name={`phNumbers[${index}]`}
                              type="tel"
                              className="field-style-inline"
                              placeholder="01***-******"
                            />
                            <button
                              type="button"
                              className="btnPush"
                              onClick={() => push("")}
                            >
                              +
                            </button>

                            {index > 0 && (
                              <button
                                type="button"
                                className="btnRemove"
                                onClick={() => remove(index)}
                              >
                                x
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>

              {/* 
                --------------------------------
                Field level validation
                --------------------------------
          */}
              <div className="field-wrap">
                <label htmlFor="ex1">Example One</label>
                <Field
                  name="ex1"
                  id="ex1"
                  className="field-style"
                  validate={ex1Validate}
                />

                <ErrorMessage name="ex1" component={TextError} />
              </div>

              {/* ---------------- Submit ---------------------- */}

              <div className="field-wrap">
                <button
                  className="btn-submit"
                  type="submit"
                  onClick={() => setFormData(savedValues)}
                >
                  Load Data
                </button>
              </div>
              <div className="field-wrap">
                <button
                  className="btn-submit"
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Test;
