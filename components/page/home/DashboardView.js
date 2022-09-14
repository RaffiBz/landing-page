import React from "react";
import Image from "next/image";

import { Dashboard } from "../../../data/HomePage";
import SubtitleLarge from "../../controls/span/SubtitleLarge";
import TitleMedium from "../../controls/span/TitleMedium";
import arrow from "../../../public/images/home/arrow-orange.png";
import DashboardGrid from "./DashboardGrid";

export default function DashboardView() {
  return (
    <div className="block relative xl:flex justify-between gap-10 lg:mx-[3.75rem] mt-[1.875rem] lg:mt-[7rem] px-4 lg:px-[7rem] pb-[13.5rem] lg:pb-0 bg-gray rounded-[25rem]">
      <div className="w-full mx-auto xl:mx-0 lg:max-w-[19.25rem] pt-16 lg:pt-[10.625rem] lg:pb-[10.625rem] text-center xl:text-left">
        <div className="hidden lg:block absolute -top-[48px] left-[240px]">
          <Image src={arrow} width={137} height={108} alt="arrow" />
        </div>
        <div className="max-w-[14.125rem] mx-auto lg:max-w-[19.25rem] xl:mx-0">
          <TitleMedium>{Dashboard.title}</TitleMedium>
        </div>
        <SubtitleLarge dimensions="block pt-6 max-w-[21.438rem] lg:max-w-none mx-auto">
          {Dashboard.subtitle}
        </SubtitleLarge>
      </div>
      <DashboardGrid data={Dashboard.grid} />
    </div>
  );
}
