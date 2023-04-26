import { Post, Reservation } from "@prisma/client";
import { safeUser } from "../../types/user";

interface PostCardProps {
  post: Post;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  actionLabel?: string;
  actionId?: string;
  currentUser?: safeUser | null;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return <div>ListingCard</div>;
};

export default PostCard;
