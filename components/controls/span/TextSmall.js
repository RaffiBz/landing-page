import React from "react";

export default function TextSmall(props) {
  return (
    <span
      className={`${props.dimensions} text-subtitle text-base leading-[1.594rem] font-medium`}
    >
      {props.children}
    </span>
  );
}
