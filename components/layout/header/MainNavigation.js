import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { NavItems } from "../../../data/NavItems";
import MobileNavigation from "./MobileNavigation";
import SignupButton from "../../controls/button/SignupButton";
import Button from "../../controls/button/Button";
import logo from "../../../public/images/nav/logo.png";
import logoWhite from "../../../public/images/nav/logo-white.png";
import menuDark from "../../../public/images/nav/menu.svg";
import menuWhite from "../../../public/images/nav/menu-white.svg";
import close from "../../../public/images/nav/close.svg";

export default function MainNavigation() {
  const router = useRouter();
  const [colorChange, setColorchange] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [menu, setMenu] = useState();
  // navbar color on scroll
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }
  //   mobile navbar toggle
  const mobileNavHandler = () => {
    setMobileNav((prev) => !prev);
  };

  useEffect(() => {
    if (router.pathname == "/about") {
      setMenu(menuWhite);
    } else {
      setMenu(menuDark);
    }
  }, [router.pathname]);

  return (
    <>
      {!mobileNav && (
        <nav
          className={`${
            router.pathname == "/about"
              ? "bg-secondary text-white"
              : "bg-white text-secondary"
          } fixed flex flex-row w-screen z-10 px-4 py-4 lg:px-10 xl:px-[3.75rem] lg:py-3 items-center shadow-medium max-w-[1920px]`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex justify-start items-center gap-10 xl:gap-[3.75rem]">
              {/* logo */}
              <Link href="/">
                <a>
                  <Image
                    src={router.pathname == "/about" ? logoWhite : logo}
                    alt="logo"
                    width={120}
                    height={39}
                  />
                </a>
              </Link>
              {/* nav list items */}
              <ul className="hidden lg:flex lg:text-lg font-medium gap-8 xl:gap-12">
                {NavItems.map((item) => (
                  <li
                    className={`${
                      router.pathname == item.href ? "text-primary" : ""
                    } hover:text-primary`}
                    key={item.id}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* support & signup */}
            <div className="hidden lg:flex justify-end items-center gap-8 xl:gap-[2.875rem]">
              <Link href="/">
                <a className="text-orange lg:text-lg font-medium">Support</a>
              </Link>
              <SignupButton />
            </div>
          </div>
        </nav>
      )}
      {/* burger menu button */}
      <Button
        className="fixed top-[1.375rem] z-20 right-4 lg:hidden"
        onClick={mobileNavHandler}
      >
        <Image
          src={mobileNav ? close : menu}
          width={32}
          height={32}
          alt="menu"
        />
      </Button>
      {/* mobile navbar */}
      {mobileNav && <MobileNavigation onClick={mobileNavHandler} />}
    </>
  );
}
