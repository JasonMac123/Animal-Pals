"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface CalendarProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  bookedDates: Date[];
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  bookedDates,
}) => {
  return (
    <DateRange
      rangeColors={["ff002b"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={bookedDates}
    />
  );
};

export default Calendar;
