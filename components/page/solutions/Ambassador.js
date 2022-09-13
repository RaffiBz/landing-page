import React from "react";
import Image from "next/image";

import { SolutionsBodyData } from "../../../data/SolutionsPage";
import ambassador from "../../../public/images/solutions/ambassador-icon.png";
import ambassadorMain from "../../../public/images/solutions/ambassador-image.png";

export default function Ambassador() {
  return (
    <div className="flex justify-between">
      {/* oval bg with text */}
      <div className="bg-lightBlue bg-opacity-10 rounded-[25rem] py-8 md:pl-[11.313rem] px-4 md:px-0 w-full max-w-[54.5rem] min-h-[32.625rem] text-center md:text-left">
        <div className="w-full max-w-[22.938rem] text-secondary">
          <div className="mx-auto w-[220px]">
            <Image src={ambassador} width={220} height={200} alt="icon" />
          </div>
          <span className="block pt-8 text-3xl leading-[2.375rem] font-bold capitalize">
            {SolutionsBodyData.ambassadors.title}
          </span>
          <span className="block pt-4 text-base leading-[1.563rem]">
            {SolutionsBodyData.ambassadors.text}
          </span>
        </div>
        <div className="block md:hidden">
          <Image width={646} height={488} src={ambassadorMain} alt="main" />
        </div>
      </div>
      {/* side image */}
      <div className="hidden md:block -ml-[12.5rem]">
        <Image width={646} height={488} src={ambassadorMain} alt="main" />
      </div>
    </div>
  );
}
