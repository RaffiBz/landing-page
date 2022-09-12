import React from "react";
import Image from "next/image";

export default function BodyItem(props) {
  return (
    <div className="block md:flex justify-between gap-8 items-center mt-8 md:mt-16">
      <div className="block w-full md:max-w-[21rem]">
        <Image src={props.num} width={90} height={87} alt="number" />
        <span className="block pt-6 text-white text-[2.625rem] leading-[3.063rem] font-bold">
          {props.title}
        </span>
        <span className="block pt-6 text-white text-lg leading-[1.594rem]">
          {props.text}
        </span>
      </div>
      <div className="block">
        <Image src={props.img} width={872} height={600} alt="image" />
      </div>
    </div>
  );
}
