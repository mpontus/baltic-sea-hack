import React, { useCallback } from "react";
import { Trans } from "@lingui/macro";
import { useFormik } from "formik";
import { Input } from "./components/Input/Input";
import { Button } from "@material-ui/core";

export const DetailsForm = ({ email, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      city: ""
    }
  });
  const handleSubmit = useCallback(details => onSubmit({ email, ...details }), [
    email,
    onSubmit
  ]);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        onChange={formik.handleChange}
        value={formik.values.email}
        label={<Trans>Full Name</Trans>}
      />
      <Input
        name="phone"
        onChange={formik.handleChange}
        value={formik.values.email}
        label={<Trans>Phone Number</Trans>}
      />
      <Input
        name="phone"
        onChange={formik.handleChange}
        value={formik.values.email}
        label={<Trans>City</Trans>}
      />
      <Button type="submit">RSVP</Button>
    </form>
  );
};
