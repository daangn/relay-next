import { AppProps } from "next/app";
import React, { useMemo } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { Environment, RecordSource } from "relay-runtime";

export function makeWithRelayNext({
  makeClientSideEnvironment,
}: {
  makeClientSideEnvironment: (source: RecordSource) => Environment;
}) {
  return (MyApp: React.FC<AppProps>): React.FC<AppProps> => {
    return (props) => {
      const recordMap = useMemo(() => {
        return props.pageProps.relay
          ? Object.entries(props.pageProps.relay.environment.source)
          : [];
      }, [props.pageProps.relay]);

      const [source, environment] = useMemo(() => {
        const source = new RecordSource();
        const environment = makeClientSideEnvironment(source);

        return [source, environment];
      }, []);

      useMemo(() => {
        for (const [dataId, record] of recordMap) {
          source.set(dataId, record as any);
        }
      }, [recordMap]);

      return (
        <RelayEnvironmentProvider environment={environment}>
          <MyApp {...props} />
        </RelayEnvironmentProvider>
      );
    };
  };
}
