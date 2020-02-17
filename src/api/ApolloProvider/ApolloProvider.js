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

  const linkAlt = ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.warn(
            `GraphQLError: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }
      if (networkError) {
        console.warn(`NetworkError: ${networkError}`);
      }
    }),
    new ApolloLink((operation, forward) => {
      console.info(operation);
      return forward(operation);
    }),
    new createUploadLink({
      uri: process.env.REACT_APP_CF_GRAPHQL_URL,
      headers: {
        "keep-alive": "true"
      }
    })
  ]);

  const client = new ApolloClient({
    cache: cache,
    link: link,
  });
  return <Provider client={client}>{props.children}</Provider>;
};

export default ApolloProvider;