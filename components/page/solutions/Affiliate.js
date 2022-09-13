import React from "react";
import Image from "next/image";

import { SolutionsBodyData } from "../../../data/SolutionsPage";
import affiliate from "../../../public/images/solutions/affiliate-icon.png";
import affiliateMain from "../../../public/images/solutions/affiliate-image.png";
import arrow from "../../../public/images/solutions/arrow-right.svg";

export default function Affiliate() {
  return (
    <div className="relative flex justify-between pt-[7rem]">
      <div className="hidden lg:block absolute top-0 left-[80px]">
        <Image src={arrow} width={99} height={116} alt="arrow" />
      </div>
      {/* side image */}
      <div className="hidden lg:block -mr-[12.5rem]">
        <Image width={644} height={431} src={affiliateMain} alt="main" />
      </div>
      {/* oval bg with text */}
      <div className="lg:flex justify-end bg-orange bg-opacity-10 rounded-[25rem] py-8 px-4 md:px-0 lg:pr-[11.313rem] w-full max-w-[54.5rem] lg:max-h-[32.625rem]">
        <div className="w-full mx-auto lg:mx-0 max-w-[22.938rem] text-secondary">
          <div className="mx-auto w-[220px]">
            <Image src={affiliate} width={220} height={200} alt="icon" />
          </div>
          <span className="block pt-8 text-3xl leading-[2.375rem] font-bold capitalize">
            {SolutionsBodyData.affiliate.title}
          </span>
          <span className="block pt-4 text-base leading-[1.563rem]">
            {SolutionsBodyData.affiliate.text}
          </span>
        </div>
        {/* main image mobile view */}
        <div className="block lg:hidden  mx-auto w-full max-w-[644px]">
          <Image width={644} height={431} src={affiliateMain} alt="main" />
        </div>
      </div>
    </div>
  );
}
