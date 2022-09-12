import Head from "next/head";

import React from "react";
import Body from "../components/page/about/body";
import Intro from "../components/page/about/intro";

export default function about() {
  return (
    <div>
      <Head>
        <title>Momentum App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Intro />
        <Body />
      </div>
    </div>
  );
}