/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type something_query = {
    readonly hello: string;
    readonly " $refType": "something_query";
};
export type something_query$data = something_query;
export type something_query$key = {
    readonly " $data"?: something_query$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"something_query">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "something_query",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hello",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'eb70427fdefd261b36fadbc2dfa33571';
export default node;
