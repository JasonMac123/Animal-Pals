"use client";

import { Reservation } from "@prisma/client";
import { safePost, safeUser } from "../../types/types";
import PostFront from "./PostFront";

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
      </div>
    </div>
  );
};

export default Post;
