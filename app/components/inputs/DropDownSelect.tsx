"use client";

import Select from "react-select";

const regions = [
  { value: "Brampton", label: "Brampton" },
  { value: "Etobicoke", label: "Etobicoke" },
  { value: "Markham", label: "Markham" },
  { value: "Midtown", label: "Midtown" },
  { value: "Missisuaga", label: "Missisuaga" },
  { value: "Newmarket", label: "Newmarket" },
  { value: "North York", label: "North York" },
  { value: "Richmond Hill", label: "Richmond Hill" },
  { value: "Scarborough", label: "Scarborough" },
  { value: "Vaughan", label: "Vaughan" },
];

export type RegionValue = {
  label: string;
  value: string;
};

interface DropDownSelectProps {
  value?: RegionValue;
  onChange: (value: RegionValue) => void;
}

const DropDownSelect: React.FC<DropDownSelectProps> = ({ value, onChange }) => {
  return (
    <div>
      <Select
        placeholder="Select Toronto region below"
        isClearable
        options={regions}
        value={value}
        onChange={(value) => onChange(value as RegionValue)}
      />
    </div>
  );
};

export default DropDownSelect;
