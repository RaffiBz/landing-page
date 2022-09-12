import React from "react";

import MainNavigation from "../header/MainNavigation";
import Footer from "../footer/Footer";

export default function GlobalLayout(props) {
  return (
    <div className="font-mainFont font-base max-w-[1920px] mx-auto">
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
