import Image from "next/image";
import React from "react";

import { Play } from "../../../data/HomePage";
import play from "../../../public/images/home/setup.png";
import LearnMoreButton from "../../controls/button/LearnMoreButton";
import Subtitle from "../../controls/span/Subtitle";
import TitleMedium from "../../controls/span/TitleMedium";

export default function Setup() {
  return (
    <div className="block bg-setup-mb bg-cover bg-no-repeat md:bg-none md:flex md:flex-row-reverse justify-between items-center pt-[7.75rem] md:pt-0 md:px-[3.75rem] mt-16 md:mt-[20rem]">
      <div className="block w-full max-w-[21.438rem] text-center md:text-left mx-auto">
        <div className="max-w-[14.125rem] mx-auto md:max-w-[17.125rem] md:mx-0">
          <TitleMedium dimensions="block">{Play.title}</TitleMedium>
        </div>
        <Subtitle dimensions="block pt-6" color="text-subtitle">
          {Play.text}
        </Subtitle>
        <LearnMoreButton display="mt-8" />
      </div>
      <div className="md:bg-setup bg-contain bg-no-repeat md:px-8 pt-8 md:pt-[5.75rem] pb-[13rem] md:pb-[6.375rem]">
        <Image src={play} width={833} height={423} alt="play" />
      </div>
    </div>
  );
}
