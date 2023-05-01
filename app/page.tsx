import getPosts from "./actions/getPosts";
import Client from "./components/Client";
import NoPosts from "./components/NoPosts";
import PostCard from "./components/Posts/PostCard";

const Home = async () => {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <Client>
        <NoPosts/>
      </Client>
    );
  }

  return (
    <Client>
      {posts.map((post: any) => {
        return (
          <div>
            <PostCard post={post} />
          </div>
        );
      })}
    </Client>
  );
};

export default Home;
