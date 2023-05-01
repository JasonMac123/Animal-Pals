"use client";

import Heading from "./Heading";
import Button from "./Button";
import { useRouter } from "next/navigation";

const NoPosts = () => {
  const router = useRouter();

  return (
    <div className="h-[80vh] flex flex-col gap-2 justify-center items-center ml-20">
      <Heading
        title="No Posts found"
        subtitle="Try changing your search filters!"
      />
      <div className="mt-4 w-1/6">
        <Button label="Reset search filters" onClick={() => router.push("/")} />
      </div>
    </div>
  );
};

export default NoPosts;
