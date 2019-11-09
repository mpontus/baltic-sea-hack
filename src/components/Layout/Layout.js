import React from "react";
import { layout, container } from "./Layout.module.css";
import { Paper, Typography } from "@material-ui/core";

export const Layout = ({ title = null, children }) => (
  <div className={layout}>
    <Paper className={container}>
      <Typography variant="h5">Baltic Sea Hack</Typography>
      <main>{children}</main>
    </Paper>
  </div>
);
