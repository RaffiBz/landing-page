import React from "react";

import { PlansData } from "../../../data/HomePage";
import Subtitle from "../../controls/span/Subtitle";
import TitleMedium from "../../controls/span/TitleMedium";
import PlansGrid from "./PlansGrid";

export default function Plans() {
  return (
    <div className="bg-plans-mb bg-cover bg-no-repeat md:bg-none md:bg-white px-4 lg:px-[3.75rem] pt-[7.5rem] pb-[9.5rem] md:pb-[13.75rem] mt-16 md:mt-0">
      <div className="text-center">
        <div className="w-full max-w-[17.125rem] mx-auto md:max-w-none">
          <TitleMedium dimensions="block">{PlansData.title}</TitleMedium>
        </div>
        <div className="w-full max-w-[28.438rem] mx-auto md:max-w-none">
          <Subtitle dimensions="block  pt-6" color="text-subtitle">
            {PlansData.subtitle}
          </Subtitle>
        </div>
      </div>
      <PlansGrid />
    </div>
  );
}
