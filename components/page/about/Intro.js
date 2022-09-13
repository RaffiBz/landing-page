import React from "react";
import Image from "next/image";

import { AboutIntro } from "../../../data/AboutPage";
import banner from "../../../public/images/about/about-banner.png";
import dots from "../../../public/images/about/dots.svg";
import dashed from "../../../public/images/about/dashed-wave.svg";
import line from "../../../public/images/about/line-wave.svg";

export default function Intro() {
  return (
    <div className="relative bg-secondary rounded-bl-[25rem] pt-[6.875rem] pb-[11.75rem] block md:flex pl-[3.75rem] justify-between overflow-hidden">
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
      {/* blue dots svg */}
      <div className="absolute top-[7.438rem] left-[28.063rem]">
        <Image src={dots} width={106} height={106} alt="dots" />
      </div>
      {/* top right wavy line */}
      <div className="absolute top-0 right-0">
        <Image src={dashed} width={722} height={287} alt="line" />
      </div>
      {/* main image */}
      <div className="z-10 md:bg-about-banner-bg bg-contain bg-no-repeat md:pl-[9rem] pt-8 md:pt-[5.75rem] pb-[13rem] md:pb-[6.375rem] md:-ml-[5rem]">
        <Image src={banner} width={824} height={569} alt="banner" />
      </div>
      {/* bottom wavy line */}
      <div className="absolute bottom-[8.438rem] left-[2.375rem]">
        <Image src={line} width={1372} height={242} alt="line" />
      </div>
    </div>
  );
}
