import React, { useState } from "react";
import Image from "next/image";

import Button from "./Button";
import Scrollup from "../../../public/images/general/scroll.svg";

export default function ScrollupButton() {
  const [isVisible, setIsVisible] = useState(false);

  // show button on scroll
  const showButton = () => {
    if (window.scrollY >= 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", showButton);
  }

  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          className="hidden md:block fixed bottom-14 right-14"
          onClick={scrollTopHandler}
        >
          <Image src={Scrollup} width={42} height={42} alt="button" />
        </Button>
      )}
    </>
  );
}
