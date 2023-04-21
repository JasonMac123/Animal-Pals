"use client";

import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useRegister from "../hooks/useRegister";
import useLogin from "../hooks/useLogin";
import { safeUser } from "../../types/user";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser?: safeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegister();
  const loginModal = useLogin();
  const [openStatus, setOpenStatus] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpenStatus((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={toggleOpen}
          className="text-sm flex items-center border-[1px] font-semibold py-4 px-8 gap-3 rounded-full bg-white hover:bg-neutral-200 hover:shadow-md transition cursor-pointer"
        >
          <AiOutlineMenu />
          <div>
            <Avatar src={currentUser?.image}/>
          </div>
        </div>
      </div>

      {openStatus && (
        <div className="absolute rounded-xl shadow-md w-full overflow-hidden right-4 top-14 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="Reservations" />
                <MenuItem onClick={() => {}} label="Past trips" />
                <MenuItem onClick={() => signOut()} label="Log-Out" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign-Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
