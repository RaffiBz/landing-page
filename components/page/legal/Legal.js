import React from "react";

import TextMedium from "../../controls/span/TextMedium";
import TitleLarge from "../../controls/span/TitleLarge";

export default function Legal(props) {
  return (
    <div className="block px-4 md:px-[3.75rem] pt-[7.75rem] h-screen">
      <div className="block w-full max-w-[43.75rem] mx-auto">
        <TitleLarge color="block text-secondary">{props.title}</TitleLarge>
        <TextMedium dimensions="block pt-8">{props.text}</TextMedium>
      </div>
    </div>
  );
}
