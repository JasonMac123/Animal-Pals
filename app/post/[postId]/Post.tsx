"use client";

import { Reservation } from "@prisma/client";
import { safePost, safeUser } from "../../types/types";
import PostFront from "./PostFront";
import PostInfo from "./PostInfo";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { eachDayOfInterval } from "date-fns";
import useLogin from "../../components/hooks/useLogin";
import axios from "axios";

const initialDate = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface PostProps {
  reservations?: Reservation[];
  post: safePost & {
    user: safeUser;
  };
  currentUser?: safeUser | null;
}

const Post: React.FC<PostProps> = ({
  post,
  currentUser,
  reservations = [],
}) => {
  const router = useRouter();
  const loginModal = useLogin();

  const bookedDates = useMemo(() => {
    let dates: Date[] = [];

    for (const reservation of reservations) {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    }

    return dates;
  }, [reservations]);

  const [totalPrice, setTotalPrice] = useState(post.price);
  const [reservationDate, setReservationDate] = useState(initialDate);

  const createReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
  }, []);

  return (
    <div className="mx-auto">
      <div className="flex flex-col gap-4">
        <PostFront
          title={post.title}
          imageSrc={post.imageSrc}
          region={post.region}
        />
        <PostInfo
          user={post.user}
          animals={post.animals}
          description={post.description}
          address={post.address}
          maxOccupancy={post.maxOccupancy}
          price={post.price}
          region={post.region}
        />
      </div>
    </div>
  );
};

export default Post;
