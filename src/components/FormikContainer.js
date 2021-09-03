import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const selectDropdown = [
    { key: "select a option", value: "" },
    { key: "option 1", value: "option1" },
    { key: "option 2", value: "option2" },
    { key: "option 3", value: "option3" },
  ];

  const radioOptions = [
    { key: "option 1", value: "R-option1" },
    { key: "option 2", value: "R-option2" },
    { key: "option 3", value: "R-option3" },
  ];

  const checkboxOptions = [
    { key: "option 1", value: "cOption1" },
    { key: "option 2", value: "cOption2" },
    { key: "option 3", value: "cOption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    choseOne: "",
    checkboxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("required!"),
    description: Yup.string().required("required!"),
    selectOption: Yup.string().required("required!"),
    choseOne: Yup.string().required("required!"),
    checkboxOption: Yup.array().min(1, "required!"),
    birthDate: Yup.date().required("required!").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form Data: ", values);
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
            label="Email"
            name="email"
            type="email"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            label="Select Option"
            name="selectOption"
            options={selectDropdown}
          />
          <FormikControl
            control="radio"
            label="Choose one of them"
            name="choseOne"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="You can choose multiple"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <FormikControl control="date" label="Pick a date" name="birthDate" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
