import React from "react";

import TitleLarge from "../../controls/span/TitleLarge";
import IndustryGrid from "./IndustryGrid";

export default function Industries() {
  return (
    <div className="bg-gray pt-[3.125rem] pb-[6.25rem] px-4 md:px-[2.5rem] items-center">
      <div className="text-center">
        <TitleLarge color="text-secondary">Industries</TitleLarge>
      </div>
      <IndustryGrid />
    </div>
  );
}
