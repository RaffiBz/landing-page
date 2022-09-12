import React from "react";

export default function TitleLarge(props) {
  return (
    <span
      className={`${props.dimensions} text-secondary text-[2.375rem] leading-[2.781rem] md:text-[3.125rem] md:leading-[3.625rem] font-bold`}
    >
      {props.children}
    </span>
  );
}
