import axios from "axios";
import { makeWithRelayNext } from "relay-next";
import { Environment, Network, Store } from "relay-runtime";

export const withRelayNext = makeWithRelayNext({
  makeClientSideEnvironment(source) {
    const store = new Store(source);

    const network = Network.create(async (operation, variables) => {
      const { data } = await axios.post("/api/graphql", {
        query: operation.text!,
        variables,
      });

      return data;
    });

    const environment = new Environment({
      store,
      network,
    });

    return environment;
  },
});
