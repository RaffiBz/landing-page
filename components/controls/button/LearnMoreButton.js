import React from "react";

import Button from "./Button";

export default function LearnMoreButton(props) {
  return (
    <Button
      className={`${props.display} px-14 py-3 text-white leading-7 bg-primary rounded-lg w-full max-w-[14.5rem]`}
    >
      Learn More
    </Button>
  );
}
