import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { safeUser } from "../../types/types";

interface NavbarProps {
  currentUser?: safeUser | null;
}

const NavBar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full h-48 md:h-32 bg-yellow-400 z-10 shadow-md">
      <div>
        <Container>
          <div className="flex md:flex-row flex-col items-end md:items-center md:justify-between my-auto">
            <div className="w-full md:w-1/2 flex flex-row items-center justify-between">
              <Logo />
              <Search />
            </div>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
