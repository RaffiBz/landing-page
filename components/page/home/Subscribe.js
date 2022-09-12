import React from "react";

import TitleMedium from "../../controls/span/TitleMedium";
import Subtitle from "../../controls/span/Subtitle";
import { SubscribeData } from "../../../data/HomePage";
import SubscribeForm from "../../controls/form/SubscribeForm";

export default function Subscribe() {
  return (
    <div className="bg-white py-16 mx-auto px-4 block">
      <div className="text-center">
        <div className="w-full max-w-[17.125rem] mx-auto md:max-w-none">
          <TitleMedium dimensions="block">{SubscribeData.title}</TitleMedium>
        </div>
        <div className="w-full max-w-[30rem] mx-auto">
          <Subtitle dimensions="block pt-6">{SubscribeData.subtitle}</Subtitle>
        </div>
      </div>
      <SubscribeForm />
    </div>
  );
}
