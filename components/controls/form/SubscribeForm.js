import React from "react";
import Image from "next/image";

import mail from "../../../public/images/general/mail.svg";
import SubscribeButton from "../button/SubscribeButton";

export default function SubscribeForm() {
  return (
    <form className="flex justify-between border-2 border-transparent focus-within:border-opacity-30 focus-within:border-primary hover:border-blueStroke rounded-[0.938rem] bg-grayLight w-full max-w-[32.25rem] mx-auto  py-2 pl-4 pr-2 mt-8 md:mt-[1.563rem]">
      <div className="flex gap-1">
        <Image src={mail} width={16} height={16} alt="mail" />
        <input
          type="email"
          className="outline-none bg-transparent placeholder:text-grayBg"
          placeholder="Enter your email here"
        />
      </div>
      <SubscribeButton />
    </form>
  );
}
