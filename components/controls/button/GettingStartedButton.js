import React from "react";
import Button from "./Button";

export default function GettingStartedButton(props) {
  return (
    <Button
      className={`${props.display} px-14 py-3 text-white leading-7 bg-primary rounded-lg mt-6 md:mt-4`}
    >
      Getting Started
    </Button>
  );
}
