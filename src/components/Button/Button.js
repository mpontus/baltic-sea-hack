import React from "react";
import { Button as BaseButton } from "@material-ui/core";

export const Button = props => (
  <BaseButton fullWidth variant="contained" color="primary" {...props} />
);
