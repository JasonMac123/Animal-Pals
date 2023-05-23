"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Logo"
      className="block cursor-pointer object-scale-down mt-3"
      height="90"
      width="90"
      src="/images/PetStay.png"
      onClick={() => router.push("/")}
    ></Image>
  );
};

export default Logo;
