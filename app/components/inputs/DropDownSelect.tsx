"use client";

import Select from "react-select";

interface DropDownSelectProps {}

const DropDownSelect: React.FC<DropDownSelectProps> = () => {
  return (
    <div>
      <Select
        placeholder="Select Toronto region below"
        isClearable
        value={value}
        onChange={(value) => onChange(value)}
      />
    </div>
  );
};

export default DropDownSelect;
