import React from "react";
import { PartnersBodyData } from "../../../data/PartnersPage";
import BodyItem from "./BodyItem";

export default function PartnersBody() {
  return (
    <div className="bg-white">
      <div className="w-full bg-secondaryDark rounded-tr-[25rem] pt-[4.313rem] pb-[7.5rem] px-4 md:px-[3.75rem]">
        {PartnersBodyData.map((item) => (
          <BodyItem
            key={item.id}
            id={item.id}
            num={item.num}
            title={item.title}
            text={item.text}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}
