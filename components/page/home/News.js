import React from "react";

import { NewsEvents } from "../../../data/HomePage";
import Subtitle from "../../controls/span/Subtitle";
import TitleMedium from "../../controls/span/TitleMedium";
import NewsGrid from "./NewsGrid";

export default function News() {
  return (
    <div className="bg-gray mt-16 py-16 px-4 lg:px-[3.75rem]">
      <div className="text-center">
        <TitleMedium dimensions="block">{NewsEvents.title}</TitleMedium>
        <Subtitle dimensions="block  pt-6">{NewsEvents.subtitle}</Subtitle>
      </div>
      <NewsGrid data={NewsEvents.news} />
    </div>
  );
}
