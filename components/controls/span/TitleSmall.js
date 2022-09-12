import React from "react";

export default function TitleSmall(props) {
  return (
    <span
      className={`${props.dimensions} text-secondary text-lg leading-[1.594rem] font-medium capitalize`}
    >
      {props.children}
    </span>
  );
}
