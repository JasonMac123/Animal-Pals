import { Reservation } from "@prisma/client";
import { safePost, safeUser } from "../../types/types";

interface PostProps {
  reservations?: Reservation[];
  post: safePost & {
    user: safeUser;
  };
  currentUser?: safeUser | null;
}

const Post: React.FC<PostProps> = ({ post, currentUser }) => {
  return <div>Post</div>;
};

export default Post;
