import React from "react";
import { Button as BaseButton } from "@material-ui/core";
import { LoadingOverlay } from "../LoadingOverlay/LoadingOverlay";

export const Button = ({ isLoading, ...rest }) => (
  <LoadingOverlay isLoading={isLoading}>
    <BaseButton fullWidth variant="contained" color="primary" {...rest} />
  </LoadingOverlay>
);
