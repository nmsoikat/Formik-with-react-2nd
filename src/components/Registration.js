import React from "react";
import { Formik, Form, validateYupSchema } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function Registration() {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Phone Number", value: "phonemoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("required!"),
    password: Yup.string().required("required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("required!"),
    modeOfContact: Yup.string().required("required"),
    phone: Yup.string().when("modeOfContact", {
      is: "phonemoc",
      then: Yup.string().required("required"),
    }),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            name="email"
            label="Email"
          />
          <FormikControl
            control="input"
            type="password"
            name="password"
            label="Password"
          />
          <FormikControl
            control="input"
            type="password"
            name="confirmPassword"
            label="Confirm Password"
          />
          <FormikControl
            control="radio"
            name="modeOfContact"
            label="Mode Of Contact"
            options={options}
          />
          <FormikControl
            control="input"
            type="tel"
            name="phone"
            label="Phone Number"
          />

          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Registration;
