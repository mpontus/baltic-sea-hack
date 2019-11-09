import React from "react";
import ReactDOM from "react-dom";
import { I18nProvider } from "@lingui/react";
import "./index.css";
import CheckIn from "./CheckIn";
import * as serviceWorker from "./serviceWorker";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { messages } from "./locales/messages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { fetchEvent, authenticate, submitDetails } from "./api";

ReactDOM.render(
  <I18nProvider catalogs={messages} language="ru">
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/check-in/:id">
            {({ match }) => (
              <CheckIn
                eventId={match.params.id}
                fetchEvent={fetchEvent}
                authenticate={authenticate}
                submitDetails={submitDetails}
              />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </I18nProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
