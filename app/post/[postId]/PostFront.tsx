"use client";

import Image from "next/image";
import Heading from "../../components/Heading";

interface PostFrontProps {
  title: string;
  region: string;
  imageSrc: string;
}

const PostFront: React.FC<PostFrontProps> = ({ title, region, imageSrc }) => {
  return (
    <>
      <Heading title={title} subtitle={`${region}, Toronto`} />
      <div className="w-full h-[40vh] rounded-xl relative">
        <Image
          alt="Picture of vacation home"
          src={imageSrc}
          fill
          className="object-cover w-full"
        />
      </div>
    </>
  );
};

export default PostFront;
