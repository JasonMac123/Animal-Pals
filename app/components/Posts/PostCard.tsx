"use client";

import { safePost, typeSafeReservations } from "../../types/types";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

import { format } from "date-fns";
import Image from "next/image";
import Button from "../Button";

interface PostCardProps {
  data: safePost;
  reservation?: typeSafeReservations;
  onAction?: (id: string) => void;
  actionLabel?: string;
  actionId?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  data,
  reservation,
  onAction,
  actionLabel,
  actionId = "",
}) => {
  const router = useRouter();

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onAction?.(actionId);
    },
    [onAction, actionId]
  );

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
      onClick={() => router.push(`/post/${data.id}`)}
      className="cursor-pointer group w-11/12 lg:w-2/3 xl:w-5/12 h-[60vh] md:h-72 flex flex-col md:flex-row gap-4 border-[2px] rounded-lg p-4 border-black hover:border-neutral-700"
    >
      <div className="relative w-full md:w-1/2 h-full border-[1px] border-black rounded-xl overflow-hidden">
        <Image
          fill
          alt="Post Image"
          src={data.imageSrc}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="text-center">
            {data.title}
            <div className="mt-10">Description: {data.description}</div>
          </div>
        </div>
        <div>
          <div>{data.region}, Ontario</div>
          <div>Address: {data.address}</div>
        </div>
        <div className="flex justify-between">
          <div>{reservationDate || `Animals allowed:${data.animals}`}</div>
          {reservation && (
            <div className="text-green-500 text-2xl">
              $ {reservation.totalPrice}
            </div>
          )}
          {!reservation && <div>{`${data.price}$ / night`}</div>}
        </div>
        {onAction && actionLabel && (
          <Button label={actionLabel} onClick={handleCancel} />
        )}
      </div>
    </div>
  );
};

export default PostCard;
