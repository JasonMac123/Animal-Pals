import getCurrentUser from "./actions/getCurrentUser";
import getPosts from "./actions/getPosts";
import Client from "./components/Client";
import NoPosts from "./components/NoPosts";
import PostCard from "./components/Posts/PostCard";

const Home = async () => {
  const posts = await getPosts();
  const currentUser = await getCurrentUser();

  if (posts.length === 0) {
    return (
      <Client>
        <NoPosts />
      </Client>
    );
  }

  return (
    <Client>
      {posts.map((post: any) => {
        return <PostCard currentUser={currentUser} post={post} key={post.id} />;
      })}
    </Client>
  );
};

export default Home;
