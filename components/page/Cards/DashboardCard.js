import Image from "next/image";
import React from "react";
import TextSmall from "../../controls/span/TextSmall";
import TitleSmall from "../../controls/span/TitleSmall";

import Card from "../../UI/Card";

export default function DashboardCard({ icon, radius, title, text }) {
  return (
    <Card
      className={`${radius} rounded-[0.938rem] bg-white p-8 w-full md:max-w-[19.125rem] shadow-large`}
    >
      <Image src={icon} width={74} height={74} alt="icon" />
      <TitleSmall dimensions="block pt-4">{title}</TitleSmall>
      <TextSmall dimensions="block pt-2">{text}</TextSmall>
    </Card>
  );
}
