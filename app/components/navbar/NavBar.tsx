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
    <div className="fixed w-full h-32 bg-yellow-400 z-10 shadow-md">
      <div>
        <Container>
          <div className="flex md:flex-row flex-col items-center justify-between my-auto">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
