import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import mail from "../../../public/images/general/mail.svg";
import SubscribeButton from "../button/SubscribeButton";

export default function SubscribeForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("subscribed successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex justify-between border-2 border-transparent focus-within:border-opacity-30 focus-within:border-primary hover:border-blueStroke rounded-[0.938rem] bg-grayLight w-full max-w-[32.25rem] mx-auto  py-2 pl-4 pr-2 mt-8 md:mt-[1.563rem]"
    >
      <div className="flex gap-1">
        <Image src={mail} width={16} height={16} alt="mail" />
        <input
          type="email"
          name="user_email"
          className="outline-none bg-transparent placeholder:text-grayBg"
          placeholder="Enter your email here"
        />
      </div>
      <SubscribeButton />
    </form>
  );
}
