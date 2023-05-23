"use client";

import { useRouter } from "next/navigation";
import Heading from "../components/Heading";
import { safeUser, typeSafeReservations } from "../types/types";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import PostCard from "../components/Posts/PostCard";

interface ReservationsProps {
  reservations: typeSafeReservations[];
  currentUser?: safeUser | null;
}

const Reservations: React.FC<ReservationsProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();

  const [deletePost, setDeletePost] = useState("");
  const cancelReservation = useCallback(
    (id: string) => {
      setDeletePost(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
        })
        .catch((error: any) => {
          toast.error("could not cancel reservation");
        })
        .finally(() => {
          setDeletePost("");
        });
    },
    [router]
  );

  return (
    <div>
      <Heading
        title="Your Reservations"
        subtitle="Your past and ongoing reservations"
      />
      <div className="w-full pt-40 flex flex-wrap justify-around">
        {reservations.map((reservation) => {
          console.log(reservation);
          return (
            <PostCard
              key={reservation.id}
              data={reservation.post}
              reservation={reservation}
              actionId={reservation.id}
              onAction={cancelReservation}
              actionLabel="Cancel Booking"
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Reservations;
