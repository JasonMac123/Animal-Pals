"use client";

import { FaDog, FaCat } from "react-icons/fa";
import { BiQuestionMark } from "react-icons/bi";
import CategoryItem from "./CategoryItem";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Cats",
    icon: FaCat,
  },
  {
    label: "Dogs",
    icon: FaDog,
  },
  {
    label: "Other animals",
    icon: BiQuestionMark,
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
    <div className="fixed top-40 md:top-28 w-full h-40 lg:h-full lg:w-40 bg-amber-200">
      <div className="pt-12 flex flex-row lg:flex-col items-center justify-center space-x-4 lg:space-x-0 lg:space-y-4 lg:my-4 overflow-x-hidden lg:overflow-visible">
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
