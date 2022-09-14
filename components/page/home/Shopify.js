import React, { useEffect, useState } from "react";
import Image from "next/image";

import TitleMedium from "../../controls/span/TitleMedium";

// import shopify from "../../../public/images/home/shopify.png"
import shopifyMb from "../../../public/images/home/shopify.png";
import { ShopifyData } from "../../../data/HomePage";

export default function Shopify() {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="md:bg-gray md:px-4 lg:px-[3.75rem] mt-16 md:mt-0 md:py-16">
      {/* <Image src={isMobile} alt="shopify" /> */}
      <div className="bg-shopify-mb md:bg-shopify bg-no-repeat bg-contain xl:bg-cover pb-[31.75rem] md:pb-[7rem] xl:pb-[8.125rem] pt-16 lg:pt-[4.5rem] xl:pt-[8.125rem] md:px-[3.25rem] items-center">
        <div className="w-full max-w-[18.75rem] md:max-w-[30rem] mx-auto md:mx-0">
          <TitleMedium dimensions="block">{ShopifyData.title}</TitleMedium>
          <span className="block text-green text-3xl leading-[2.344rem] pt-4">
            {ShopifyData.subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}
