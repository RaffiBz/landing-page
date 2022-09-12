import React from "react";

export default function SubtitleSmall(props) {
  return (
    <span
      className={`${props.dimensions} text-subtitle text-sm md:text-base leading-4 md:leading-[1.125rem]`}
    >
      {props.children}
    </span>
  );
}
