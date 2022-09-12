import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FooterItems } from "../../../data/NavItems";
import arrowDown from "../../../public/images/nav/arrow-down.svg";

export default function FooterLinks() {
  return (
    <div className="hidden md:flex w-full justify-between gap-3">
      {FooterItems.map((item) => (
        <div className="block" key={item.id}>
          <Link href={item.href}>
            <a className="text-white leading-[1.125rem] font-bold">
              {item.title}
            </a>
          </Link>
          {/* subItems */}
          <div className="pt-[0.375rem]">
            {item.dropdown.map((dropdown, key) => (
              <Link href={dropdown.href} key={key}>
                <a className="block text-white opacity-60 text-sm leading-4 pt-3 capitalize">
                  {dropdown.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
