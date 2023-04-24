import Client from "./components/Client";
import NoListings from "./components/NoListings";

const Home = () => {
  const empty = true;

  if (empty) {
    return (
      <Client>
        <NoListings />
      </Client>
    );
  }

  return <div></div>;
};

export default Home;
