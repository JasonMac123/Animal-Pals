import NoPosts from "../components/NoPosts";
import Client from "../components/Client";

import getCurrentUser from "../functions/getCurrentUser";
import getReservations from "../functions/getReservation";
import Heading from "../components/Heading";

const UserReservations = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <Client>
        <div className="w-full h-full flex justify-center items-center">
          <Heading
            title="You are not logged in"
            subtitle="Please log in to see your trips"
          />
        </div>
      </Client>
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (!reservations.length) {
    return (
      <Client>
        <div className="w-full h-full flex justify-center items-center">
          <Heading title="No trips found" />
        </div>
      </Client>
    );
  }
};
