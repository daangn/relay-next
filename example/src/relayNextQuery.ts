import { makeRelayNextQuery } from "relay-next";
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { makeSchema } from "./graphql/makeSchema";

export const relayNextQuery = makeRelayNextQuery({
  makeServerSideEnvironment() {
    const source = new RecordSource();
    const store = new Store(source);

    const network = Network.create(async (operation, variables) => {
      const { query } = makeSchema();

      const result = await query({
        query: operation.text!,
        variables,
      });

      return result as any;
    });

    const environment = new Environment({
      network,
      store,
    });

    return environment;
  },
});
