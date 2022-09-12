import React from "react";

import { AboutBody } from "../../../data/AboutPage";
import AboutShopify from "./AboutShopify";
import ImageBullets from "./ImageBullets";

export default function Body() {
  return (
    <div className="block bg-about-body-bg bg-cover bg-no-repeat px-4 md:px-[3.75rem] pt-[3.875rem] pb-[5rem]">
      {AboutBody.map((item) => (
        <ImageBullets
          title={item.title}
          bullets={item.bullets}
          key={item.id}
          img={item.img}
          direction={item.id % 2 === 0 ? "flex-row-reverse" : "flex-row"}
          spacing={item.id != 1 ? "pt-[7.5rem]" : ""}
        />
      ))}
      <AboutShopify />
    </div>
  );
}
