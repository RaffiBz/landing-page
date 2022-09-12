import React from "react";
import Image from "next/image";
import Link from "next/link";

import linkedin from "../../../public/images/social/linkedin.svg";
import facebook from "../../../public/images/social/facebook.svg";
import twitter from "../../../public/images/social/twitter.svg";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 mt-4">
      <Link href="/">
        <a>
          <Image src={linkedin} width={24} height={24} alt="linkedin" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image src={facebook} width={24} height={24} alt="facebook" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image src={twitter} width={24} height={24} alt="twitter" />
        </a>
      </Link>
    </div>
  );
}
