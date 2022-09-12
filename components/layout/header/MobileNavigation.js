import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/nav/logo-white.png";
import { NavItems } from "../../../data/NavItems";
import SignupButton from "../../controls/button/SignupButton";

export default function MobileNavigation(props) {
  const router = useRouter();
  return (
    <nav className="fixed z-10 block lg:hidden w-full min-h-screen bg-secondary pt-[5rem] text-center">
      {/* logo */}
      <Link href="/">
        <a>
          <Image src={logo} alt="logo" width={120} height={39} />
        </a>
      </Link>
      {/* nav list items */}
      <ul className="block text-lg font-medium pt-[1.25rem] pb-[4rem]">
        {NavItems.map((item) => (
          <li
            className={`${
              router.pathname == item.href ? "text-primary" : "text-white"
            } hover:text-primary pt-12`}
            key={item.id}
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      {/* signup */}
      <SignupButton />
    </nav>
  );
}
