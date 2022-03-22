import { RelayNextPage } from "relay-next";
import React from "react";
import { graphql, useFragment } from "react-relay";
import { GetStaticProps } from "next";
import { somethingQuery } from "../__relay__/somethingQuery.graphql";
import { something_query$key } from "../__relay__/something_query.graphql";
import { relayNextQuery } from "../relayNextQuery";

const Something: RelayNextPage<somethingQuery> = (props) => {
  const query = useFragment<something_query$key>(
    graphql`
      fragment something_query on Query {
        hello
      }
    `,
    props.relay.query.response
  );

  return <div>hello: {query.hello}</div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await relayNextQuery<somethingQuery>(
        graphql`
          query somethingQuery {
            ...something_query
          }
        `,
        {}
      )),
    },
  };
};

export default Something;
