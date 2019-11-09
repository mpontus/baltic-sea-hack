import React, { forwardRef, useCallback } from "react";
import InputMask from "react-input-mask";
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  FilledInput
} from "@material-ui/core";

/**
 * Proxy component used to translate awkward InputMask's ref prop to a natural
 * input ref prop
 */
const InputMaskProxy = forwardRef((props, proxyRef) => {
  const refCallback = useCallback(el => (proxyRef.current = el), [proxyRef]);
  return <InputMask {...props} inputRef={refCallback} />;
});

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
