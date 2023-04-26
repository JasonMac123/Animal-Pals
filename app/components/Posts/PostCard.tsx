import { Post } from "@prisma/client";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return <div>ListingCard</div>;
};

export default PostCard;
