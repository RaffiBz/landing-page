import React from "react";
import Button from "./Button";

export default function ButtonPrimary(props) {
  return (
    <Button
      className={`${props.display} w-full max-w-[14.5rem] py-3 text-white text-base text-center leading-7 bg-primary rounded-lg`}
    >
      {props.children}
    </Button>
  );
}
