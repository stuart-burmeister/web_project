import { ApolloProvider as Provider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { createUploadLink } from "apollo-upload-client";
import React from "react";

const ApolloProvider = props => {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: "https://hn66xh54q0.execute-api.ap-northeast-2.amazonaws.com/dev0-vsmart00/api"
  });

  const client = new ApolloClient({
    cache: cache,
    link: link,
    typeDefs: getTypedefs(),
    defaultOptions: {
      query: {
        fetchPolicy: "network-only"
      },
      watchQuery: {
        fetchPolicy: "network-only"
      }
    }
  });
  return <Provider client={client}>{props.children}</Provider>;
};

export default ApolloProvider;