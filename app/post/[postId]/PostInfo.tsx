"use client";

import Avatar from "../../components/Avatar";
import { safeUser } from "../../types/types";

interface PostInfoProps {
  user: safeUser;
  animals: string[];
  description: string;
  maxOccupancy: number;
  address: string;
  price: number;
}

const PostInfo: React.FC<PostInfoProps> = ({
  user,
  animals,
  description,
  maxOccupancy,
  address,
  price,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center text-xl">
            <div>Posted by {user?.name}</div> <Avatar src={user?.image} />
          </div>
          <div className="flex items-center gap-4">
            <div>Max occupancy: {maxOccupancy} pets</div>
            <div>Animals allowed: {animals}</div>
          </div>
          <div>Located at: {address}</div>
        </div>
        <div className="text-green-500">{price}$ / Night</div>
      </div>
      <hr />
      <div className="text-md">{description}</div>
    </div>
  );
};

export default PostInfo;
