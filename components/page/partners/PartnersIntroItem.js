import React from "react";
import Image from "next/image";

export default function PartnersIntroItem(props) {
  return (
    <div className="block w-full max-w-[19.25rem] px-[1.813rem] py-8 text-center text-white">
      <span className="block text-3xl leading-[2.344rem]">{props.title}</span>
      <div className="my-8 w-20 h-20 mx-auto">
        <Image src={props.icon} width={80} height={80} alt="icon" />
      </div>
      <span className="text-base leading-[1.563rem]">{props.text}</span>
      <div className="mt-2 w-6 h-6 mx-auto">
        <Image src={props.arrow} width={24} height={24} alt="arrow" />
      </div>
    </div>
  );
}
