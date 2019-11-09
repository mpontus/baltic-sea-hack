import React, { useState } from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { useFormik } from "formik";
import { Trans } from "@lingui/macro";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Flipper, Flipped } from "react-flip-toolkit";
import { useInteractor } from "./hooks/useInteractor";
import { Logo } from "./components/Logo/Logo";
import { MaskedInput } from "./components/MaskedInput/MaskedInput";

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
                label={<Trans>Email</Trans>}
                type="email"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
                disabled={email !== undefined}
              />
              {email && (
                <React.Fragment>
                  <Input
                    autoFocus
                    name="name"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    label={<Trans>Full Name</Trans>}
                  />
                  <MaskedInput
                    name="phone"
                    required
                    mask="+7 (999) 999-99-99"
                    onChange={formik.handleChange}
                    pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}"
                    value={formik.values.phone}
                    label={<Trans>Phone Number</Trans>}
                  />
                  <Input
                    name="city"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    label={<Trans>City</Trans>}
                  />
                </React.Fragment>
              )}
            </div>
          </Flipped>
          <Flipped flipId="button">
            <Button
              type="submit"
              disabled={isAuthenticating}
              isLoading={isAuthenticating}
            >
              <Trans>RSVP</Trans>
            </Button>
          </Flipped>
        </form>
      </Layout>
    </Flipper>
  );
};

export default App;
