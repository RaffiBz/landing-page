import React from "react";
import Image from "next/image";

export default function IndustrySingle(props) {
  return (
    <div
      className={`${props.position} ${props.display} block w-full max-w-[33.188rem] mx-auto mt-8 md:mt-0`}
    >
      <div className={props.rotate}>
        <Image src={props.img} width={531} height={537} alt="industry" />
      </div>
      <span className="block pt-8 text-3xl leading-[2.375rem] font-bold capitalize">
        {props.title}
      </span>
      <span className="block pt-4 text-base leading-[1.563rem]">
        {props.text}
      </span>
    </div>
  );
}
