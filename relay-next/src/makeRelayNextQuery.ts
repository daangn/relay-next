import { fetchQuery, GraphQLTaggedNode, OperationType } from "relay-runtime";
import { Environment, Record } from "relay-runtime/lib/store/RelayStoreTypes";

export type RelayNextQueryPageProps<T extends OperationType> = {
  relay: {
    query: {
      cacheId: any;
      variables: T["variables"];
      response: T["response"];
    };
    environment: {
      source: {
        [key: string]: Record<{}>;
      };
    };
  };
};

export function makeRelayNextQuery({
  makeServerSideEnvironment,
}: {
  makeServerSideEnvironment: () => Environment;
}) {
  return async <T extends OperationType>(
    QUERY: GraphQLTaggedNode,
    variables: T["variables"]
  ): Promise<RelayNextQueryPageProps<T>> => {
    const environment = makeServerSideEnvironment();

    const cacheId = (QUERY as any).default.params.cacheID;
    const response = await fetchQuery<T>(
      environment,
      QUERY,
      variables
    ).toPromise();

    const source = environment.getStore().getSource().toJSON();

    return {
      relay: {
        query: {
          cacheId,
          variables,
          response,
        },
        environment: {
          source,
        },
      },
    };
  };
}
