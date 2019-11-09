import React, { useState } from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { useFormik } from "formik";
import { Trans } from "@lingui/macro";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { AnimatedForm } from "./components/AnimatedForm/AnimatedForm";
import { Flipper, Flipped } from "react-flip-toolkit";
import { Paper } from "@material-ui/core";
import { useInteractor } from "./hooks/useInteractor";
import { Logo } from "./components/Logo/Logo";

export const App = ({ fetchEvent, authenticate, submitDetails }) => {
  const [email, setEmail] = useState();
  const [isAuthenticating, handleAuthenticate] = useInteractor(authenticate);
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      city: ""
    },
    onSubmit: async values => {
      await handleAuthenticate();
      setEmail(values.email);
    }
  });

  return (
    <Flipper flipKey={email}>
      <Layout style={{ textAlign: "center" }}>
        <Flipped flipId="logo">
          <Logo style={{ marginBottom: "30px" }} />
        </Flipped>
        <form onSubmit={formik.handleSubmit}>
          <Flipped flipId="form">
            <div>
              <Input
                autoFocus
                name="email"
                label="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                disabled={email !== undefined}
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
            </div>
          </Flipped>

          <Flipped flipId="button">
            <Button type="submit" disabled={isAuthenticating}>
              RSVP
            </Button>
          </Flipped>
        </form>
      </Layout>
    </Flipper>
  );
};

export default App;
