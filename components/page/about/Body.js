import React from "react";

import { AboutBody } from "../../../data/AboutPage";
import AboutShopify from "./AboutShopify";
import ImageBullets from "./ImageBullets";

export default function Body() {
  return (
    <div className="block bg-about-body-bg bg-cover bg-no-repeat px-4 md:px-[2.5rem] xl:px-[3.75rem] pb-[5rem]">
      {AboutBody.map((item) => (
        <ImageBullets
          key={item.id}
          id={item.id}
          title={item.title}
          bullets={item.bullets}
          img={item.img}
          direction={item.id % 2 === 0 ? "flex-row-reverse" : "flex-row"}
          spacing={
            item.id != 1 ? "pt-[4.5rem] md:pt-[7.5rem]" : "pt-[3.875rem]"
          }
        />
      ))}
      <AboutShopify />
    </div>
  );
}
