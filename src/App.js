import React, { useState } from "react";
import "./App.css";
import { EmailForm } from "./EmailForm";
import { DetailsForm } from "./DetailsForm";
import { Layout } from "./components/Layout/Layout";
import { useFormik } from "formik";
import { Trans } from "@lingui/macro";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

export const App = ({ fetchEvent, authenticate, submitDetails }) => {
  const [email, setEmail] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      city: ""
    },
    onSubmit: values => setEmail(values.email)
  });

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <Input
          autoFocus
          name="email"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          disabled={email}
        />
        {email && (
          <React.Fragment>
            <Input
              autoFocus
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              label={<Trans>Full Name</Trans>}
            />
            <Input
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              label={<Trans>Phone Number</Trans>}
            />
            <Input
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              label={<Trans>City</Trans>}
            />
          </React.Fragment>
        )}
        <Button type="submit">RSVP</Button>
      </form>
    </Layout>
  );
};

export default App;
