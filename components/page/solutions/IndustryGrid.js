import React from "react";
import { IndustryData } from "../../../data/SolutionsPage";
import IndustrySingle from "./IndustrySingle";

export default function IndustryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mt-[2.375rem] w-full max-w-[68.375rem] mx-auto">
      {IndustryData.map((data) => (
        <IndustrySingle
          key={data.id}
          position={data.id % 2 === 0 ? "md:mt-[12.5rem]" : ""}
          display={data.id > 2 ? "inline-block" : ""}
          title={data.title}
          text={data.text}
          img={data.img}
          rotate={data.id % 2 === 0 ? "-rotate-[73.91deg]" : ""}
        />
      ))}
    </div>
  );
}
