"use client";

import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Logo"
      className="block cursor-pointer object-contain"
      height="100"
      width="100"
      src="/images/PetStay.png"
      onClick={() => router.push("/")}
    ></Image>
  );
};

export default Logo;
