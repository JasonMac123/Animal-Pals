import getCurrentUser from "./functions/getCurrentUser";
import getPosts from "./functions/getPosts";
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
      <div className="w-full pt-40 pl-40 flex flex-wrap justify-around">
        {posts.map((post) => {
          return (
            <PostCard currentUser={currentUser} data={post} key={post.id} />
          );
        })}
      </div>
    </Client>
  );
};

export default Home;
