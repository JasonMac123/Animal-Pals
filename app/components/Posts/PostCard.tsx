"use client";

import { Post, Reservation } from "@prisma/client";
import { safeUser } from "../../types/user";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

import { format } from "date-fns";
import Image from "next/image";

interface PostCardProps {
  post: Post;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  actionLabel?: string;
  actionId?: string;
  currentUser?: safeUser | null;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  reservation,
  onAction,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onAction?.(actionId);
    },
    [onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return post.price;
  }, [reservation, post.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${post.id}`)}
      className="cursor-pointer group w-1/2 h-80 flex"
    >
      <div className="relative w-1/2 h-full">
        <Image
          fill
          alt="Post Image"
          src={post.imageSrc}
          className="object-contain h-full w-full group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <div>
          <div className="flex justify-center">
            {post.title}
            <div>{post.description}</div>
          </div>
        </div>
        <div>{reservationDate || `Animals allowed:${post.animals}`}</div>
        {!reservation && <div>{`${post.price}$ / night`}</div>}
      </div>
    </div>
  );
};

export default PostCard;
