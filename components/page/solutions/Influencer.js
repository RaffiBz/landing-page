import React from "react";
import Image from "next/image";

import { SolutionsBodyData } from "../../../data/SolutionsPage";
import influencer from "../../../public/images/solutions/influencer-icon.png";
import influencerMain from "../../../public/images/solutions/influencer-image.png";

export default function Influencer() {
  return (
    <div className="flex justify-between pt-[9.125rem]">
      {/* oval bg with text */}
      <div className="bg-gold bg-opacity-10 rounded-[25rem] py-8 lg:pl-[8.313rem] xl:pl-[11.313rem] px-4 lg:px-0 w-full max-w-[54.5rem] min-h-[32.625rem]">
        <div className="w-full mx-auto lg:mx-0 max-w-[22.938rem] text-secondary">
          <div className="mx-auto w-[220px]">
            <Image src={influencer} width={220} height={200} alt="icon" />
          </div>
          <span className="block pt-8 text-3xl leading-[2.375rem] font-bold capitalize">
            {SolutionsBodyData.influencers.title}
          </span>
          <span className="block pt-4 text-base leading-[1.563rem]">
            {SolutionsBodyData.influencers.text}
          </span>
        </div>
        <div className="block lg:hidden  mx-auto w-full max-w-[639px]">
          <Image width={639} height={624} src={influencerMain} alt="main" />
        </div>
      </div>
      {/* side image */}
      <div className="hidden lg:block -ml-[8.5rem]">
        <Image width={639} height={624} src={influencerMain} alt="main" />
      </div>
    </div>
  );
}
