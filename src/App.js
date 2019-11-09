import React, { useState } from "react";
import "./App.css";
import { EmailForm } from "./EmailForm";
import { DetailsForm } from "./DetailsForm";
import { Layout } from "./components/Layout/Layout";

export const App = ({ fetchEvent, submitDetails }) => {
  const [email, setEmail] = useState();

  return (
    <Layout>
      {email === undefined ? (
        <EmailForm onSubmit={email => setEmail(email)} />
      ) : (
        <DetailsForm email={email} onSubmit={submitDetails} />
      )}
    </Layout>
  );
};

export default App;
