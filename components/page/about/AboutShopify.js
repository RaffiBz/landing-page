import React from "react";

import TitleMedium from "../../controls/span/TitleMedium";
import Subtitle from "../../controls/span/Subtitle";
import { AboutShopifyData } from "../../../data/AboutPage";

export default function AboutShopify() {
  return (
    <div
      id="7"
      className="bg-shopify-mb md:bg-shopify bg-no-repeat bg-contain rounded-[0.938rem] pt-16 lg:pt-8 xl:pt-[3.125rem] 1xl:pt-[8.125rem] pb-[25rem] lg:pb-8 xl:pb-[3.125rem] 1xl:pb-[8.125rem] md:px-[3.25rem] mt-16 md:mt-20 items-center"
    >
      <div className="w-full max-w-[18.75rem] md:max-w-[30rem] mx-auto md:mx-0">
        <TitleMedium dimensions="block">{AboutShopifyData.title}</TitleMedium>
        <Subtitle dimensions="block pt-6" color="text-subtitle">
          {AboutShopifyData.text}
        </Subtitle>
      </div>
    </div>
  );
}
