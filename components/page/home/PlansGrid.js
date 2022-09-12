import React from "react";
import Image from "next/image";

import basic from "../../../public/images/plans/basic.png";
import standard from "../../../public/images/plans/standard.png";
import pro from "../../../public/images/plans/pro.png";

export default function PlansGrid() {
  return (
    <div className="md:bg-plans bg-no-repeat bg-cover block md:flex justify-center items-center pt-8 md:pt-[2.813rem] md:pb-[3.25rem] mt-8 md:mt-12">
      <div className="relative w-full md:w-[307px] h-[470px]">
        <Image src={basic} layout="fill" alt="plan" />
      </div>
      <div className="relative w-full md:w-[417px] h-[547px]">
        <Image src={standard} layout="fill" alt="plan" />
      </div>
      <div className="relative w-full md:w-[307px] h-[470px]">
        <Image src={pro} layout="fill" alt="plan" />
      </div>
    </div>
  );
}
