import Logo from "./Logo";
const Navigation = () => {
  return (
    <div>
      <ul className="" style={{ zIndex: 2000 }}>
        <Logo />
        <li className="">
          <a href="#" className="">
            Resume
          </a>
        </li>
        <li className="">
          <a href="#" className="">
            Projects
          </a>
        </li>
        <li className="">
          <a href="#" className="">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
