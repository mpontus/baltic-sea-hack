import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";

const delay = n => new Promise(resolve => setTimeout(resolve, n));

const fetchEvent = id =>
  Promise.resolve({
    name: "Baltic Sea Hack"
  });

const authenticate = async (eventId, email) => {
  await delay(2000);
  return {};
};

const submitDetails = data =>
  Promise.resolve({
    location: "http://yandex.ru"
  });

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App
      fetchEvent={fetchEvent}
      authenticate={authenticate}
      submitDetails={submitDetails}
    />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
