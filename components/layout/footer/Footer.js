import React from "react";
import Image from "next/image";
import Link from "next/link";

import SocialIcons from "./SocialIcons";
import MobileAccordion from "./MobileAccordion";
import logo from "../../../public/images/nav/logo-white.svg";
import FooterLinks from "./FooterLinks";
import ButtonPrimary from "../../controls/button/ButtonPrimary";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary px-4 pt-12 pb-12 lg:px-14 lg:pt-12 lg:pb-4">
      <div className="block md:flex justify-between gap-14 xl:gap-20 1xl:gap-[6.875rem]">
        <div className="block md:max-w-[14.5rem]">
          {/* logo */}
          <Link href="/">
            <a>
              <div className="max-w-[130px] max-h-[42px] md:max-w-[203px] md:max-h-[66px]">
                <Image src={logo} alt="logo" width={203} height={66} />
              </div>
            </a>
          </Link>
          <span className="block text-white text-xs leading-[1.125rem] pt-2">
            Momentum is the first of it’s kind plug-and-play influencer and
            affiliate management tool that integrates directly with Shopify.
          </span>
          {/* socials */}
          <SocialIcons />
          <ButtonPrimary display="mt-6 md:mt-4">Getting Started</ButtonPrimary>
        </div>
        {/* accordion mobile view */}
        <MobileAccordion />
        <FooterLinks />
        {/* copyright */}
      </div>
      <div className="block mt-[2.125rem] md:mt-[1.75rem] text-white text-center text-sm leading-5 opacity-60">
        <span>Copyright @ </span>
        <span>{new Date().getFullYear()}</span>
        <span> Momentum</span>
      </div>
    </footer>
  );
}
