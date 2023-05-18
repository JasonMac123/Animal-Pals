import getSpecificPost from "../../actions/getSpecificPost";

interface postParams {
  postId?: string;
}

const PostPage = async ({ params }: { params: postParams }) => {
  const post = await getSpecificPost(params);

  return <div>Post page</div>;
};

export default PostPage;
