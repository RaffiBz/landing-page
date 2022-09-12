import React from "react";

export default function TitleMedium(props) {
  return (
    <span
      className={`${props.dimensions} text-secondary text-3xl leading-[2.344rem] md:text-[2.625rem] md:leading-[3.125rem] font-bold capitalize`}
    >
      {props.children}
    </span>
  );
}
