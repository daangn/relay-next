import { NextPage } from "next";
import { OperationType } from "relay-runtime";

import { RelayNextQueryPageProps } from "./makeRelayNextQuery";

export type RelayNextPage<O extends OperationType, P = {}, IP = P> = NextPage<
  P & {
    relay: RelayNextQueryPageProps<O>["relay"];
  },
  IP
>;
