"use client";

import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  return (
    <Image
      alt="Logo"
      className="block cursor-pointer object-scale-down mt-3"
      height="90"
      width="90"
      src="/images/PetStay.png"
    ></Image>
  );
};

export default Logo;