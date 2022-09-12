import React from "react";

export default function SubtitleLarge(props) {
  return (
    <span
      className={`${props.dimensions} text-subtitle text-lg leading-[1.875rem] font-medium`}
    >
      {props.children}
    </span>
  );
}
