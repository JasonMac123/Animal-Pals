"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useCallback } from "react";
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
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery: any = {
      category: label,
    };

    if (params?.get("category") === label) {
      updatedQuery.category = null;
    }

    const url = queryString.stringifyUrl(
      { url: "/", query: updatedQuery },
      { skipNull: true }
    );

    router.push(url);
  }, [router, label, params]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center gap-2 hover:text-neutral-700 transition cursor-pointer 
      ${selected ? "bg-neutral-600 text-white" : ""} `}
    >
      <Icon size={26} />
      {label}
    </div>
  );
};

export default CategoryItem;
