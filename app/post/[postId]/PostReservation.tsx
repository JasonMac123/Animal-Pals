"use client";

import { Calendar, Range } from "react-date-range";

interface PostReservationProps {
  price: number;
  totalPrice: number;
  dateRange: Range;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  bookedDates: Date[];
}

const PostReservation: React.FC<PostReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  bookedDates,
}) => {
  return (
    <div className="rounded-xl border-[1px] border-neutral-400 overflow-hidden">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl">$ {price}</div>
        <div>/ night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        bookedDates={bookedDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
    </div>
  );
};

export default PostReservation;
