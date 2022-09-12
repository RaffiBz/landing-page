import React from "react";

export default function TextMedium(props) {
  return (
    <span
      className={`${props.dimensions} text-secondary text-base leading-[1.594rem] md:text-[1.25rem] md:leading-[1.875rem] font-medium`}
    >
      {props.children}
    </span>
  );
}
