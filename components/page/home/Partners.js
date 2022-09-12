import React from "react";
import Image from "next/image";

import TitleMedium from "../../controls/span/TitleMedium";
import Subtitle from "../../controls/span/Subtitle";
import { PartnersData } from "../../../data/HomePage";
import partnersMb from "../../../public/images/home/partners-mb.png";
import partners from "../../../public/images/home/partners.png";

export default function Partners() {
  return (
    <div className="bg-white md:bg-dots bg-no-repeat bg-cover mt-16 md:mt-[8.75rem] px-4 md:py-[5.938rem]">
      <div className="hidden md:block relative w-full max-w-[920px] h-[748px] mx-auto">
        <Image src={partners} layout="fill" alt="partners" />
      </div>
      <div className="text-center md:-mt-[31.75rem]">
        <div className="w-full max-w-[17.125rem] mx-auto">
          <TitleMedium dimensions="block">{PartnersData.title}</TitleMedium>
        </div>
        <div className="w-full max-w-[25.5rem] mx-auto">
          <Subtitle dimensions="block pt-6" color="text-subtitle">
            {PartnersData.subtitle}
          </Subtitle>
        </div>
      </div>
      <div className="md:hidden bg-dots-mb bg-no-repeat bg-cover px-4">
        <div className="relative w-full max-w-[343px] h-[1171px] mx-auto">
          <Image src={partnersMb} layout="fill" alt="partners" />
        </div>
      </div>
    </div>
  );
}
