import React from "react";
import Image from "next/image";

import ShortNote from "../../controls/span/ShortNote";
import TitleLarge from "../../controls/span/TitleLarge";
import Subtitle from "../../controls/span/Subtitle";
import GettingStartedButton from "../../controls/button/GettingStartedButton";
import check from "../../../public/images/home/intro-check.svg";
import hero from "../../../public/images/home/hero.png";

export default function Intro() {
  return (
    <div className="block pt-[6.375rem] md:pt-[5.75rem] px-4 text-center">
      <ShortNote>
        Momentum. one platform. all your partner marketing needs.
      </ShortNote>
      <TitleLarge dimensions="block pt-3 w-full max-w-[40.25rem] mx-auto">
        Influencer, Affiliate, & Ambassador Management.
      </TitleLarge>
      <div className="flex justify-center items-center gap-1 pt-2">
        <span className="text-primaryDark font-medium text-2xl leading-7 md:text-3xl md:leading-9">
          All Done
        </span>
        <Image src={check} width={37} height={37} alt="check" />
      </div>
      <Subtitle dimensions="block pt-3 w-full max-w-[32.125rem] mx-auto">
        Automatically onboard and allow all your partners to log into Momentum’s
        branded portal for up to the minute tracking. No need for coding, or
        custom implementation.
      </Subtitle>
      <GettingStartedButton display="hidden md:block mx-auto" />
      {/* hero image */}
      <div className="mx-auto mt-2 md:mt-8">
        <Image src={hero} width={1017} height={536} alt="hero" />
      </div>
    </div>
  );
}
