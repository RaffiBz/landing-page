import React from "react";
import Image from "next/image";

import Button from "./Button";
import arrow from "../../../public/images/general/arrow-right.svg";

export default function ReadMoreButton({ display }) {
  return (
    <Button className={`${display} flex gap-[0.125rem] items-center`}>
      <span className="text-sm md:text-base leading-4 md:leading-[1.125rem] text-primaryDark">
        Read more
      </span>
      <Image src={arrow} width={16} height={16} alt="arrow" />
    </Button>
  );
}
