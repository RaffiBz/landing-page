import React from "react";
import Image from "next/image";

import { SolutionsInroduction } from "../../../data/SolutionsPage";
import TitleLarge from "../../controls/span/TitleLarge";
import Subtitle from "../../controls/span/Subtitle";
import arrow from "../../../public/images/solutions/arrow-left.svg";

export default function SolutionsIntro() {
  return (
    <div className="relative pt-[7.75rem] pb-[1.25rem] text-center px-4">
      <TitleLarge color="text-secondary">
        {SolutionsInroduction.title}
      </TitleLarge>
      <div className="w-full mx-auto max-w-[26.938rem] pt-6">
        <Subtitle color="text-subtitle">
          {SolutionsInroduction.subtitle}
        </Subtitle>
      </div>
      <div className="hidden lg:block absolute -bottom-[20px] right-[130px] xl:right-[214px]">
        <Image src={arrow} width={99} height={116} alt="arrow" />
      </div>
    </div>
  );
}
