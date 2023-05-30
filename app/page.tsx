import getCurrentUser from "./functions/getCurrentUser";
import getPosts, { postParams } from "./functions/getPosts";
import Client from "./components/Client";
import NoPosts from "./components/NoPosts";
import PostCard from "./components/Posts/PostCard";

interface HomeProps {
  searchParams: postParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const posts = await getPosts(searchParams);
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
