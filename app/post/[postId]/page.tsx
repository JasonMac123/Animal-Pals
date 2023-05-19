import getCurrentUser from "../../functions/getCurrentUser";
import getSpecificPost from "../../functions/getSpecificPost";
import Client from "../../components/Client";
import NoPosts from "../../components/NoPosts";
import Post from "./Post";

interface postParams {
  postId?: string;
}

const PostPage = async ({ params }: { params: postParams }) => {
  const post = await getSpecificPost(params);
  const currentUser = await getCurrentUser();

  if (!post) {
    return (
      <Client>
        <NoPosts />
      </Client>
    );
  }

  return (
    <div className="pt-60">
      <Client>
        <Post post={post} currentUser={currentUser} />
      </Client>
    </div>
  );
};

export default PostPage;
