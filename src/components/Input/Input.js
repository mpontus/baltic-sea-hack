import React from "react";
import { TextField } from "@material-ui/core";

export const Input = ({ label, ...rest }) => (
  <TextField
    fullWidth
    variant="filled"
    margin="normal"
    label={label}
    {...rest}
  />
);
