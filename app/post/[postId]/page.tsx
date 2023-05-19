import getSpecificPost from "../../actions/getSpecificPost";

interface postParams {
  postId?: string;
}

const PostPage = async ({ params }: { params: postParams }) => {
  const post = await getSpecificPost(params);

  return <div className="pt-60">Post page</div>;
};

export default PostPage;
