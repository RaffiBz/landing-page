import React from "react";

import { PartnersIntroData } from "../../../data/PartnersPage";
import ButtonPrimary from "../../controls/button/ButtonPrimary";
import Subtitle from "../../controls/span/Subtitle";
import TitleLarge from "../../controls/span/TitleLarge";

export default function PartnersIntroMain() {
  return (
    <div className="w-full max-w-[27.938rem] text-center md:mt-[12rem]">
      <TitleLarge color="text-primary">
        {PartnersIntroData.main.title}
      </TitleLarge>
      <Subtitle dimensions="block pt-2" color="text-white">
        {PartnersIntroData.main.subtitle}
      </Subtitle>
      <ButtonPrimary display="mt-8 mx-auto">
        {PartnersIntroData.main.btnText}
      </ButtonPrimary>
    </div>
  );
}
