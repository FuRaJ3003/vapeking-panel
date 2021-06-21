import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import registerServiceWorker from './registerServiceWorker';
import { Routes } from "./Routes";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  credentials: "include"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
