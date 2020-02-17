import { ApolloProvider as Provider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import React from "react";

const ApolloProvider = props => {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: "https://hn66xh54q0.execute-api.ap-northeast-2.amazonaws.com/dev0-vsmart00/api"
  });

  const client = new ApolloClient({
    cache: cache,
    link: link,
  });
  return <Provider client={client}>{props.children}</Provider>;
};

export default ApolloProvider;