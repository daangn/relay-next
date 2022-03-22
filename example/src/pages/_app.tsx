import { AppProps } from "next/app";
import React from "react";
import { withRelayNext } from "../withRelayNext";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withRelayNext(MyApp);
