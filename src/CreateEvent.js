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
import { MaskedInput } from "./components/MaskedInput/MaskedInput";

export const CreateEvent = ({ createEvent }) => {
  const [isSubmitting, handleSubmit] = useInteractor(createEvent);
  const [file, setFile] = useState();
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
        <Typography variant="h3" gutterBottom>
          <Trans>Добавление нового мероприятия</Trans>
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <ImageUpload
            label={<Trans>Нажмите здесь чтобы загрузить логотип</Trans>}
            onDrop={setFile}
          />
          <Input
            autoFocus={file !== undefined}
            gutterBottom
            name="orgName"
            label={<Trans>Имя организации</Trans>}
            required
            onChange={formik.handleChange}
            value={formik.values.orgName}
          />
          <MaskedInput
            name="phone"
            required
            mask="+7 (999) 999-99-99"
            onChange={formik.handleChange}
            pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}"
            value={formik.values.phone}
            label={<Trans>Номер телефона</Trans>}
          />
          <Input
            name="ceo"
            label={<Trans>Имя генерального директора</Trans>}
            required
            onChange={formik.handleChange}
            value={formik.values.ceo}
          />
          <Input
            name="name"
            label={<Trans>Название мероприятия</Trans>}
            required
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <Input
            name="redirectUrl"
            label={<Trans>Ссылка на страницу мероприятия</Trans>}
            required
            onChange={formik.handleChange}
            value={formik.values.redirectUrl}
          />
          <Input
            name="address"
            label={<Trans>Место проведения</Trans>}
            required
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <Input
            multiline
            rows={2}
            name="description"
            label={<Trans>Описание события</Trans>}
            required
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            style={{ marginTop: "15px" }}
          >
            <Trans>Create Event</Trans>
          </Button>
        </form>
      </FullPageTransition>
    </Layout>
  );
};
