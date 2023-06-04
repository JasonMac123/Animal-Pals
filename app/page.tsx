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

  if (posts.length === 0) {
    return (
      <Client>
        <NoPosts />
      </Client>
    );
  }

  return (
    <Client>
      <div className="w-full pt-[22rem] md:pt-72 lg:pt-40 lg:pl-40 flex flex-wrap justify-around">
        {posts.map((post) => {
          return <PostCard data={post} key={post.id} />;
        })}
      </div>
    </Client>
  );
};

export default Home;
