import React from "react";
import Image from "next/image";

import basic from "../../../public/images/plans/basic.svg";
import standard from "../../../public/images/plans/standard.svg";
import pro from "../../../public/images/plans/pro.svg";

export default function PlansGrid() {
  return (
    <div className="block md:flex justify-center items-center pt-8 md:pt-[2.813rem] md:pb-[3.25rem] md:px-[3.75rem] xl:px-[6.875rem] mt-8 md:mt-12 md:bg-primaryDark md:rounded-[25rem] md:bg-opacity-10">
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
