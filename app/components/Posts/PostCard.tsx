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
      className="cursor-pointer group w-5/12 h-72 flex gap-4 border-[2px] rounded-lg p-4 border-black hover:border-neutral-700"
    >
      <div className="relative w-1/2 h-full border-[1px] border-black rounded-xl overflow-hidden">
        <Image
          fill
          alt="Post Image"
          src={post.imageSrc}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="text-center">
            {post.title}
            <div className="mt-10">Description: {post.description}</div>
          </div>
        </div>
        <div>
          <div>{post.region}, Ontario</div>
          <div>Address: {post.address}</div>
        </div>
        <div className="flex justify-between">
          <div>{reservationDate || `Animals allowed:${post.animals}`}</div>
          {!reservation && <div>{`${post.price}$ / night`}</div>}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
