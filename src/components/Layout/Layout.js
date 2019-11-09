import React from "react";
import { layout, container } from "./Layout.module.css";

export const Layout = ({ title = null, children, ...rest }) => (
  <div className={layout}>
    <main className={container} {...rest}>
      {children}
    </main>
  </div>
);
