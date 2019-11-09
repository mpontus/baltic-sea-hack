import React from "react";
import { layout, container } from "./Layout.module.css";
import { Paper, Typography } from "@material-ui/core";

export const Layout = ({ title = null, children }) => (
  <div className={layout}>
    <main>{children}</main>
  </div>
);
