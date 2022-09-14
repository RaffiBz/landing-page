import React from "react";

import TitleLarge from "../../controls/span/TitleLarge";
import { BlogPageData } from "../../../data/BlogPage";
import Subtitle from "../../controls/span/Subtitle";

export default function BlogIntro() {
  return (
    <div className="pt-[6.25rem] px-4 lg:px-[3.75rem]">
      <div className="w-full bg-primaryDark bg-opacity-10 text-center pt-[2.75rem] pb-[3.188rem] rounded-[0.938rem]">
        <TitleLarge color="text-secondary">{BlogPageData.title}</TitleLarge>
        <Subtitle color="text-subtitle" dimensions="block pt-6">
          {BlogPageData.subtitle}
        </Subtitle>
      </div>
    </div>
  );
}
