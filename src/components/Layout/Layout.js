import React from "react";
import { layout, container } from "./Layout.module.css";
import { Paper, Typography } from "@material-ui/core";

export const Layout = ({ title = null, children, ...rest }) => (
  <div className={layout}>
    <main {...rest}>{children}</main>
  </div>
);
