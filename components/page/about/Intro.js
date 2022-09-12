import React from "react";
import Image from "next/image";

import { AboutIntro } from "../../../data/AboutPage";
import banner from "../../../public/images/about/about-banner.png";

export default function Intro() {
  return (
    <div className="bg-about bg-no-repeat bg-cover pt-[6.875rem] pb-[11.75rem] block md:flex pl-[3.75rem] justify-between">
      <div className="block w-full max-w-[31.563rem] md:mt-[9.125rem]">
        <span className="text-primary text-[2.375rem] leading-[2.781rem] md:text-[3.125rem] md:leading-[3.625rem] font-bold capitalize">
          {AboutIntro.title}
        </span>
        <span className="block text-white text-[2.375rem] leading-[2.781rem] md:text-[3.125rem] md:leading-[3.625rem] font-bold capitalize">
          {AboutIntro.titleSecondary}
        </span>
        <span className="block pt-8 text-white text-lg leading-[1.594rem] font-medium">
          {AboutIntro.text}
        </span>
      </div>
      <div className="md:bg-about-banner-bg bg-contain bg-no-repeat md:pl-[9rem] pt-8 md:pt-[5.75rem] pb-[13rem] md:pb-[6.375rem] md:-ml-[5rem]">
        <Image src={banner} width={824} height={569} alt="banner" />
      </div>
    </div>
  );
}
