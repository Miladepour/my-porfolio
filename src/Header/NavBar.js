import Logo from "./Logo";
import Navigation from "./Navigation";
const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <Logo />
        <div>
          <Navigation />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
