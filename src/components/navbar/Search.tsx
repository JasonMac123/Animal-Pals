"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="bg-white border-[1px] w-auto py-2 px-10 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold px-6 flex items-center gap-2">
          <div className="block">Search</div>
          <div className="p-2 bg-white rounded-full">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
