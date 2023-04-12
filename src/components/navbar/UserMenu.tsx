"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={() => {}}
          className="text-sm flex items-center border-[1px] font-semibold py-4 px-8 gap-3 rounded-full bg-white hover:bg-neutral-200 hover:shadow-md transition cursor-pointer"
        >
          <AiOutlineMenu />
          <div>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
