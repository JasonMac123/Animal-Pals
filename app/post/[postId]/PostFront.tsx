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
    <>
      <Heading title={title} subtitle="" />
      <div className="w-full h-[70vh] rounded-xl relative">
        <Image
          alt="Picture of vacation home"
          src={imageSrc}
          fill
          className="object-cover w-full"
        />
      </div>
      <div>{region}, Ontario</div>
      <div>{description}</div>
    </>
  );
};

export default PostFront;
