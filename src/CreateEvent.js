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
import { Typography } from "@material-ui/core";

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
    onSubmit: async ({ name, redirectUrl }) => {
      const result = await handleSubmit({ name, redirectUrl });
      setResult(result);
    }
  });
  const checkoutUrl = useMemo(
    () => result && `${process.env.REACT_APP_BASE_URL}/check-in/${result.id}`,
    [result]
  );

  return (
    <Layout>
      <FullPageTransition
        open={result !== undefined}
        to={
          <Layout>
            <Typography variant="h3" gutterBottom>
              <Trans>QR-код вашего мероприятия</Trans>
            </Typography>
            <div style={{ marginBottom: "30px" }}>
              <Typography gutterBottom>
                <Trans>
                  Для того чтобы участники отметились на вашем мероприятии,
                  покажите им этот QR-код.
                </Trans>
              </Typography>
              <Typography>
                <Trans>
                  После сканирования данные участники попадут в вашу базу данных
                  и перейдут по URL которую вы указали раньше.
                </Trans>
              </Typography>
            </div>
            <div style={{ textAlign: "center" }}>
              <QRCode value={checkoutUrl} size={420} />
            </div>
          </Layout>
        }
      >
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
            autoFocus
            name="redirectUrl"
            label={<Trans>Redirect URL</Trans>}
            required
            onChange={formik.handleChange}
            value={formik.values.redirectUrl}
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
