import React from "react";

import TextMedium from "../../controls/span/TextMedium";

export default function Legal(props) {
  return (
    <div className="block px-4 md:px-[3.75rem] pt-[7.75rem] h-screen">
      <div className="block w-full max-w-[43.75rem] mx-auto">
        <span className="block text-3xl leading-[1.875rem] text-secondary">
          {props.title}
        </span>
        <TextMedium dimensions="block pt-8">{props.text}</TextMedium>
      </div>
    </div>
  );
}
