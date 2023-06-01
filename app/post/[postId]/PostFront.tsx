"use client";

import Image from "next/image";
import Heading from "../../components/Heading";

interface PostFrontProps {
  title: string;
  region: string;
  description: string;
  imageSrc: string;
}

const PostFront: React.FC<PostFrontProps> = ({
  title,
  region,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col w-full md:w-1/2">
      <Heading title={title} subtitle="" />
      <div className="w-full h-[70vh] rounded-xl relative">
        <Image
          alt="Picture of vacation home"
          src={imageSrc}
          fill
          className="object-cover w-full"
        />
      </div>
      <div className="text-3xl my-4">
        <em>{region}</em>, Ontario
      </div>
      <div className="md:mb-8">{description}</div>
    </div>
  );
};

export default PostFront;
