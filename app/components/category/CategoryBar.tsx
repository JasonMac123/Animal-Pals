"use client";

import { FaDog, FaCat } from "react-icons/fa";
import { BiQuestionMark } from "react-icons/bi";
import CategoryItem from "./CategoryItem";

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
  return (
    <div className="fixed top-32 h-full w-40">
      <div className="pt-4 flex flex-col items-center space-y-4">
        {categories.map((item) => {
          return (
            <CategoryItem
              key={item.label}
              label={item.label}
              description={item.description}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBar;
