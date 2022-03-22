import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphql } from "graphql";

const typeDefs = `
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello() {
      return "world!";
    },
  },
};

export function makeSchema() {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  return {
    schema,
    query({ query, variables }: { query: string; variables: any }) {
      return graphql({
        schema,
        source: query!,
        variableValues: variables,
        contextValue: {},
      });
    },
  };
}
