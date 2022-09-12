import React from "react";

import { PartnersIntroData } from "../../../data/PartnersPage";
import PartnersIntroItem from "./PartnersIntroItem";
import PartnersIntroMain from "./PartnersIntroMain";

export default function PartnersIntro() {
  return (
    <div className="bg-white">
      <div className="bg-secondaryDark pt-[8rem] pb-[5.813rem] rounded-bl-[25rem]">
        {/* top section with main title */}
        <div className="flex justify-between px-[6.25rem]">
          <PartnersIntroItem
            title={PartnersIntroData.agency.title}
            icon={PartnersIntroData.agency.icon}
            arrow={PartnersIntroData.agency.arrow}
            text={PartnersIntroData.agency.text}
          />
          <PartnersIntroMain />
          <PartnersIntroItem
            title={PartnersIntroData.commerce.title}
            icon={PartnersIntroData.commerce.icon}
            arrow={PartnersIntroData.commerce.arrow}
            text={PartnersIntroData.commerce.text}
          />
        </div>
      </div>
    </div>
  );
}
