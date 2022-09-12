import React from "react";

export default function ShortNote(props) {
  return (
    <span className="text-secondary text-base leading-[1.125rem]">
      {props.children}
    </span>
  );
}
