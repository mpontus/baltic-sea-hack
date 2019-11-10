import React, { useState, useCallback } from "react";
import { Trans } from "@lingui/macro";
import Dropzone, { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { Typography } from "@material-ui/core";

const Container = styled.div`
  border: 2px dashed #828282;
  padding: 90px 30px;
  max-height: 400px;
  max-width: 600px;
  width: 100%;
  cursor: pointer;
  text-align: center;
`;

const Preview = styled.img`
  max-height: 400px;
  max-width: 100%;
`;

const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export const ImageUpload = ({ label, onDrop }) => {
  const [src, setSrc] = useState();
  const handleDrop = useCallback(
    async ([file]) => {
      const contents = await toBase64(file);
      setSrc(contents);
      if (onDrop) {
        onDrop(contents);
      }
    },
    [onDrop]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop
  });

  return src ? (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Preview src={src} />
    </div>
  ) : (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      <Typography variant="button">{label}</Typography>
    </Container>
  );
};
