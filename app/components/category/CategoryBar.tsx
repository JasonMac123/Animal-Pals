"use client";

import { FaDog, FaCat } from "react-icons/fa";
import { BiQuestionMark } from "react-icons/bi";
import CategoryItem from "./CategoryItem";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Cats",
    icon: FaCat,
    description: "This place allows cats",
  },
  {
    label: "Dogs",
    icon: FaDog,
    description: "This place allows dogs",
  },
  {
    label: "Other animals",
    icon: BiQuestionMark,
    description: "This place allows other types of animals",
  },
];

const CategoryBar = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  if (pathName !== "/") {
    return null;
  }

  return (
    <div className="fixed top-32 h-full w-40 bg-amber-200">
      <div className="pt-4 flex flex-col items-center justify-center space-y-4 my-4">
        {categories.map((item) => {
          return (
            <CategoryItem
              key={item.label}
              label={item.label}
              selected={category === item.label}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBar;
