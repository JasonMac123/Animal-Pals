"use client";

import { Reservation } from "@prisma/client";
import { safePost, safeUser } from "../../types/types";
import PostFront from "./PostFront";
import PostInfo from "./PostInfo";

interface PostProps {
  reservations?: Reservation[];
  post: safePost & {
    user: safeUser;
  };
  currentUser?: safeUser | null;
}

const Post: React.FC<PostProps> = ({ post, currentUser }) => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col gap-4">
        <PostFront
          title={post.title}
          imageSrc={post.imageSrc}
          region={post.region}
        />
        <PostInfo
          user={post.user}
          animals={post.animals}
          description={post.description}
          address={post.address}
          maxOccupancy={post.maxOccupancy}
          price={post.price}
          region={post.region}
        />
      </div>
    </div>
  );
};

export default Post;
