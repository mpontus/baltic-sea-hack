import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const fetchEvent = id =>
  Promise.resolve({
    name: "Baltic Sea Hack"
  });

const authenticate = (eventId, email) => Promise.resolve({});

const submitDetails = data =>
  Promise.resolve({
    location: "http://yandex.ru"
  });

ReactDOM.render(
  <App
    fetchEvent={fetchEvent}
    authenticate={authenticate}
    submitDetails={submitDetails}
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
