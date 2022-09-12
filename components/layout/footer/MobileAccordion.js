import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FooterItems } from "../../../data/NavItems";
import arrowDown from "../../../public/images/nav/arrow-down.svg";

export default function MobileAccordion(props) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="accordion block md:hidden">
      {FooterItems.map((item) => (
        <div className="accordion-item mt-6" key={item.id}>
          <div className="flex justify-between items-center" id="headingOne">
            <Link href={item.href}>
              <a className="text-white leading-[1.125rem] font-bold">
                {item.title}
              </a>
            </Link>
            <Image
              src={arrowDown}
              width={9}
              height={4.5}
              alt="arrow"
              onClick={() => handleOpen(item.id)}
            />
          </div>

          {open === item.id && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show pt-[0.375rem]"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              {item.dropdown.map((dropdown, key) => (
                <Link href={dropdown.href} key={key}>
                  <a className="block text-white opacity-60 text-sm leading-4 pt-3 capitalize">
                    {dropdown.name}
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
