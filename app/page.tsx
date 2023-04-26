import getListings from "./actions/getListings";
import Client from "./components/Client";
import NoListings from "./components/NoListings";

const Home = async () => {
  const listings = await getListings();

  if (listings.length === 0) {
    return (
      <Client>
        <NoListings />
      </Client>
    );
  }

  return <div></div>;
};

export default Home;
