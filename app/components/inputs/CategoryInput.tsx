"use client";
import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`rounded-md border-2 py-4 px-12 flex flex-col hover:border-green-500 transition cursor-pointer w-full lg:w-1/3 xl:w-1/4
      ${selected ? `border-green-500` : `border-neutral-100`}`}
    >
      <Icon size={20} />
      <div>{label}</div>
    </div>
  );
};

export default CategoryInput;
