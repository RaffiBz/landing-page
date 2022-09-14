import React from "react";
import Image from "next/image";

import { PlansData } from "../../../data/HomePage";
import Subtitle from "../../controls/span/Subtitle";
import TitleMedium from "../../controls/span/TitleMedium";
import PlansGrid from "./PlansGrid";
import dots from "../../../public/images/general/dot-square.svg";

export default function Plans() {
  return (
    <div
      id="plans"
      className="bg-primaryDark relative rounded-[25rem] bg-opacity-10 md:rounded-none md:bg-opacity-100 md:bg-white px-4 lg:px-[2.5rem] xl:px-[3.75rem] pt-[7.5rem] pb-[9.5rem] md:pb-[13.75rem] mt-16 md:mt-0"
    >
      {/* background dots top*/}
      <div className="hidden md:block absolute top-16 left-[8.75rem]">
        <Image width={148} height={148} src={dots} alt="dots" />
      </div>
      <div className="hidden md:block absolute top-[5.938rem] right-[4.188rem]">
        <Image width={148} height={148} src={dots} alt="dots" />
      </div>
      {/* title */}
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
      {/* plan cards */}
      <PlansGrid />
      {/* background dots bottom */}
      <div className="hidden md:block absolute bottom-16 right-[3.813rem]">
        <Image width={148} height={148} src={dots} alt="dots" />
      </div>
    </div>
  );
}
