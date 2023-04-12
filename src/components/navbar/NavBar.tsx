import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const NavBar = () => {
  return (
    <div className="fixed w-full h-32 bg-yellow-400 z-10 shadow-md">
      <div>
        <Container>
          <div className="flex items-center justify-between my-auto">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
