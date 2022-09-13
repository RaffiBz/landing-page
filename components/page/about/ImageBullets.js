import React from "react";
import Image from "next/image";
import TitleMedium from "../../controls/span/TitleMedium";

export default function ImageBullets(props) {
  return (
    <div
      id={props.id}
      className={`${props.direction} ${props.spacing} block lg:flex justify-between gap-[7.063rem]`}
    >
      <div className="block w-full max-w-[21rem] md:mt-[4.375rem] mx-auto pb-4">
        <TitleMedium>{props.title}</TitleMedium>
        <div className="block pt-6">
          {props.bullets.map((item) => (
            <div className="flex gap-[0.375rem] pt-4" key={item.id}>
              <div className="min-w-[24px] min-h-[24px] object-contain">
                <Image src={item.icon} width={24} height={24} alt="icon" />
              </div>
              <span className="text-subtitle text-lg leading-[1.563rem]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Image src={props.img} width={872} height={618} alt="main" />
    </div>
  );
}
