"use client";
import { IconType } from "react-icons";

interface CategoryItemProps {
  label: string;
  description: string;
  icon: IconType;
  selected?: Boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 hover:text-neutral-700 transition cursor-pointer 
      ${selected ? "bg-neutral-600 text-white" : ""} `}
    >
      <Icon size={26} />
      {label}
    </div>
  );
};

export default CategoryItem;
