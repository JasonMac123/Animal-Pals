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
      <div className="w-full pt-40 pl-44 flex flex-wrap">
        {posts.map((post: any) => {
          return (
            <PostCard currentUser={currentUser} post={post} key={post.id} />
          );
        })}
      </div>
    </Client>
  );
};

export default Home;
