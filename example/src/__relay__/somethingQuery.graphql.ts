/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type somethingQueryVariables = {};
export type somethingQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"something_query">;
};
export type somethingQuery = {
    readonly response: somethingQueryResponse;
    readonly variables: somethingQueryVariables;
};



/*
query somethingQuery {
  ...something_query
}

fragment something_query on Query {
  hello
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "somethingQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "something_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "somethingQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hello",
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "02ccf1e76ed38697c932de5009af25ef",
    "id": null,
    "metadata": {},
    "name": "somethingQuery",
    "operationKind": "query",
    "text": "query somethingQuery {\n  ...something_query\n}\n\nfragment something_query on Query {\n  hello\n}\n"
  }
};
(node as any).hash = '5c861a15e90d5ea9b37b60463c5a68f7';
export default node;
