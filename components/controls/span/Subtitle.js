import React from "react";

export default function Subtitle(props) {
  return (
    <span
      className={`${props.dimensions} text-subtitle text-lg leading-[1.594rem] font-medium`}
    >
      {props.children}
    </span>
  );
}
