import React from "react";
import Image from "next/image";

import Card from "../../UI/Card";
import calendar from "../../../public/images/general/calendar.svg";
import SubtitleSmall from "../../controls/span/SubtitleSmall";
import TextMedium from "../../controls/span/TextMedium";
import ReadMoreButton from "../../controls/button/ReadMoreButton";

export default function NewsCard({ img, date, text }) {
  return (
    <Card className="w-full max-w-[26.25] bg-white p-[0.813rem] md:p-4 rounded-[0.938rem] shadow-large">
      <div className="relative rounded-[0.938rem] w-auto h-[196px] lg:h-[240px]">
        <Image src={img} layout="fill" alt="news" className="object-cover" />
      </div>
      <div className="flex items-center gap-2 pt-[0.969rem] md:pt-[1.188rem]">
        <Image width={16} height={16} src={calendar} alt="calendar" />
        <SubtitleSmall>{date}</SubtitleSmall>
      </div>
      <TextMedium dimensions="block pt-[0.969rem] md:pt-[1.188rem]">
        {text}
      </TextMedium>
      <ReadMoreButton display="pt-[0.969rem] md:pt-[1.188rem]" />
    </Card>
  );
}
