import React from "react";
import Image from "next/image";

import { PartnersIntroData } from "../../../data/PartnersPage";
import PartnersIntroItem from "./PartnersIntroItem";
import PartnersIntroMain from "./PartnersIntroMain";
import vectorGreen from "../../../public/images/partners/vector-green.svg";
import vectorBlue from "../../../public/images/partners/vector-blue.svg";
import vectorOrange from "../../../public/images/partners/vector-orange.svg";
import dotsSmall from "../../../public/images/partners/dots-small.svg";
import dotsLeft from "../../../public/images/partners/dots-left.svg";
import dotsRight from "../../../public/images/partners/dots-right.svg";

export default function PartnersIntro() {
  return (
    <div className="bg-white">
      <div className="bg-secondaryDark pt-[8rem] pb-[8.813rem] md:pb-[5.813rem] rounded-bl-[25rem]">
        {/* top section with main title */}
        <div className="relative md:flex justify-between px-4 md:px-[6.25rem]">
          {/* main title mobile view */}
          <div className="block md:hidden">
            <PartnersIntroMain />
          </div>
          <PartnersIntroItem
            title={PartnersIntroData.agency.title}
            icon={PartnersIntroData.agency.icon}
            arrow={PartnersIntroData.agency.arrow}
            text={PartnersIntroData.agency.text}
          />
          <div className="absolute hidden md:block top-[3.375rem] left-[34.875rem]">
            <Image src={vectorGreen} width={77} height={44} alt="vector" />
          </div>
          <div className="absolute hidden md:block -top-[1.813rem] right-[23.875rem]">
            <Image src={dotsSmall} width={122} height={122} alt="dots" />
          </div>
          <div className="hidden md:block">
            <PartnersIntroMain />
          </div>
          <PartnersIntroItem
            title={PartnersIntroData.commerce.title}
            icon={PartnersIntroData.commerce.icon}
            arrow={PartnersIntroData.commerce.arrow}
            text={PartnersIntroData.commerce.text}
          />
        </div>
        {/* bottom section */}
        <div className="relative flex">
          <div className="absolute hidden md:block top-[1.813rem] left-0">
            <Image src={dotsLeft} width={112} height={210} alt="dots" />
          </div>
          <div className="absolute hidden md:block top-[4.875rem] left-[5.188rem]">
            <Image src={vectorOrange} width={127} height={73} alt="vector" />
          </div>
          <div className="md:flex justify-between w-full max-w-[48.5rem] mx-auto mt-[1.438rem]">
            <PartnersIntroItem
              title={PartnersIntroData.apps.title}
              icon={PartnersIntroData.apps.icon}
              arrow={PartnersIntroData.apps.arrow}
              text={PartnersIntroData.apps.text}
            />
            <PartnersIntroItem
              title={PartnersIntroData.publisher.title}
              icon={PartnersIntroData.publisher.icon}
              arrow={PartnersIntroData.publisher.arrow}
              text={PartnersIntroData.publisher.text}
            />
          </div>
          <div className="absolute hidden md:block top-[3.375rem] right-[3.875rem]">
            <Image src={vectorBlue} width={100} height={118} alt="vector" />
          </div>
          <div className="absolute hidden md:block -bottom-[4.438rem] right-0">
            <Image src={dotsRight} width={138} height={210} alt="dots" />
          </div>
        </div>
      </div>
    </div>
  );
}
