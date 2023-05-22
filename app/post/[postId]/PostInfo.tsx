"use client";

import Avatar from "../../components/Avatar";
import { safeUser } from "../../types/types";

interface PostInfoProps {
  user: safeUser;
  animals: string[];
  description: string;
  maxOccupancy: number;
  address: string;
  region: string;
  price: number;
}

const PostInfo: React.FC<PostInfoProps> = ({
  user,
  animals,
  description,
  maxOccupancy,
  address,
  region,
  price,
}) => {
  return (
    <div className="w-1/2 flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center text-xl space-x-4">
            <div>Posted by {user?.name}</div> <Avatar src={user?.image} />
          </div>
          <div className="flex items-center gap-4">
            <div>Max occupancy: {maxOccupancy} pets</div>
            <div>Animals allowed: {animals}</div>
          </div>
          <div className="flex space-x-4">
            <div>Located at: {address}</div>
            <div>{region}, Toronto</div>
          </div>
        </div>
        <div className="text-green-500 text-3xl">{price}$ / Night</div>
      </div>
      <hr />
      <div className="text-md">{description}</div>
    </div>
  );
};

export default PostInfo;
