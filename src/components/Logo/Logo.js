import React from "react";
import logoSrc from "./baltic.png";

export const Logo = props => (
  <img
    src={logoSrc}
    alt="Logo"
    {...props}
    style={{ width: "600px", maxWidth: "100%", ...props.style }}
  />
);
