import React from "react";
import InputMask from "react-input-mask";
import { FormControl, InputLabel, FilledInput } from "@material-ui/core";

/**
 * Input component for masked input
 */
export const MaskedInput = ({ label, mask, pattern, ...rest }) => (
  <FormControl variant="filled" fullWidth>
    <InputLabel htmlFor="formatted-text-mask-input">{label}</InputLabel>
    <FilledInput
      fullWidth
      inputComponent={InputMask}
      inputProps={{ mask, pattern }}
      {...rest}
    />
  </FormControl>
);
