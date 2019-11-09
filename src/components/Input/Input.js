import React from "react";
import { TextField } from "@material-ui/core";

export const Input = ({ label, ...rest }) => (
  <TextField fullWidth margin="normal" {...rest} label={label} />
);
