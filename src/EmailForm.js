import React from "react";
import { useFormik } from "formik";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";

export const EmailForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    onSubmit: values => onSubmit(values.email)
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="email"
        label="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Button type="submit">RSVP</Button>
    </form>
  );
};
