import React from "react";

export default function Subtitle(props) {
  return (
    <span
      className={`${props.dimensions} ${props.color} text-lg leading-[1.594rem] font-medium`}
    >
      {props.children}
    </span>
  );
}
