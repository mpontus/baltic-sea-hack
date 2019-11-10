import React, { useState, useMemo } from "react";
import { Layout } from "./components/Layout/Layout";
import { useFormik } from "formik";
import { Trans } from "@lingui/macro";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { useInteractor } from "./hooks/useInteractor";
import { FullPageTransition } from "./components/FullPageTransition/FullPageTransition";
import Dropzone from "react-dropzone";
import QRCode from "qrcode-react";
import { ImageUpload } from "./components/ImageUpload/ImageUpload";

export const CreateEvent = ({ createEvent }) => {
  const [isSubmitting, handleSubmit] = useInteractor(createEvent);
  const [result, setResult] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      city: ""
    },
    onSubmit: async data => {
      const result = await handleSubmit(data);
      setResult(result);
    }
  });
  const checkoutUrl = useMemo(
    () => result && `${process.env.REACT_APP_BASE_URL}/check-in/${result.id}`,
    [result]
  );

  return (
    <Layout style={{ textAlign: "center" }}>
      <FullPageTransition
        open={result !== undefined}
        to={
          <Layout>
            <QRCode value={checkoutUrl} size={420} />
          </Layout>
        }
      >
        <ImageUpload />
        <form onSubmit={formik.handleSubmit}>
          <Input
            autoFocus
            name="name"
            label={<Trans>Event Name</Trans>}
            required
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <Input
            multiline
            rows={2}
            name="desription"
            label={<Trans>Event Description</Trans>}
            required
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <Button
            type="submit"
            isSubmitting={isSubmitting}
            style={{ marginTop: "15px" }}
          >
            <Trans>Create Event</Trans>
          </Button>
        </form>
      </FullPageTransition>
    </Layout>
  );
};
