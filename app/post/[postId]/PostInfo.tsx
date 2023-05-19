"use client";

import { safeUser } from "../../types/types";

interface PostInfoProps {
  user: safeUser;
  animals: string[];
  description: string;
  maxOccupancy: number;
  region: string;
  address: string;
  price: number;
}

const PostInfo: React.FC<PostInfoProps> = ({
  user,
  animals,
  description,
  maxOccupancy,
  region,
  address,
  price,
}) => {
  return <div className="flex flex-col gap-8"></div>;
};

export default PostInfo;
