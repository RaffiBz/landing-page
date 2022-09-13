import React from "react";
import Image from "next/image";

import { SolutionsBodyData } from "../../../data/SolutionsPage";
import partner from "../../../public/images/solutions/partner-icon.png";
import partnerMain from "../../../public/images/solutions/partner-image.png";
import arrow from "../../../public/images/solutions/arrow-left.svg";

export default function Partner() {
  return (
    <div className="relative flex justify-between pt-[13.438rem]">
      <div className="hidden lg:block absolute top-0 left-[400px] xl:left-[600px]">
        <Image src={arrow} width={99} height={116} alt="arrow" />
      </div>
      {/* side image */}
      <div className="-mr-[12.5rem] mt-[2.75rem]">
        <Image width={644} height={384} src={partnerMain} alt="main" />
      </div>
      {/* oval bg with text */}
      <div className="flex justify-end bg-primaryDark bg-opacity-10 rounded-[25rem] pt-8 pb-[5.875rem] pr-[11.313rem] w-full max-w-[54.5rem] max-h-[32.625rem]">
        <div className="w-full max-w-[22.938rem] text-secondary">
          <div className="mx-auto w-[220px]">
            <Image src={partner} width={220} height={200} alt="icon" />
          </div>
          <span className="block pt-8 text-3xl leading-[2.375rem] font-bold capitalize">
            {SolutionsBodyData.partners.title}
          </span>
          <span className="block pt-4 text-base leading-[1.563rem]">
            {SolutionsBodyData.partners.text}
          </span>
        </div>
      </div>
    </div>
  );
}
