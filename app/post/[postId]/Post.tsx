"use client";

import { safePost, safeUser, typeSafeReservations } from "../../types/types";
import PostFront from "./PostFront";
import PostInfo from "./PostInfo";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { differenceInCalendarDays, eachDayOfInterval, setDate } from "date-fns";
import useLogin from "../../components/hooks/useLogin";
import axios from "axios";
import { toast } from "react-hot-toast";
import PostReservation from "./PostReservation";
import { Range } from "react-date-range";

const initialDate = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface PostProps {
  reservations?: typeSafeReservations[];
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
  const [reservationDate, setReservationDate] = useState<Range>(initialDate);

  const createReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    axios
      .post("/api/reservations", {
        totalPrice,
        startDate: reservationDate.startDate,
        endDate: reservationDate.endDate,
        postId: post?.id,
      })
      .then(() => {
        toast.success("Reservation booked successfully!");
        setReservationDate(initialDate);
        router.push("/reservations");
      })
      .catch(() => {
        toast.error("Error, could not book reservation.");
      });
  }, [totalPrice, initialDate, post?.id, router, currentUser, loginModal]);

  useEffect(() => {
    if (reservationDate.startDate && reservationDate.endDate) {
      const numberOfDays = differenceInCalendarDays(
        reservationDate.endDate,
        reservationDate.startDate
      );

      if (!numberOfDays) {
        setTotalPrice(post.price);
      } else {
        setTotalPrice(post.price * numberOfDays);
      }
    }
  }, [reservationDate, post.price]);

  return (
    <div className="mx-auto mb-10">
      <div className="flex gap-4">
        <PostFront
          title={post.title}
          imageSrc={post.imageSrc}
          region={post.region}
          description={post.description}
        />
        <div className="flex flex-col">
          <PostInfo
            user={post.user}
            animals={post.animals}
            address={post.address}
            maxOccupancy={post.maxOccupancy}
            price={post.price}
            region={post.region}
          />
          <PostReservation
            price={post.price}
            totalPrice={totalPrice}
            onChangeDate={(value) => setReservationDate(value)}
            dateRange={reservationDate}
            onSubmit={createReservation}
            bookedDates={bookedDates}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
