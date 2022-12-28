import Logo from "./Logo";
const Navigation = () => {
  return (
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ zIndex: 2000 }}>
        <Logo />
        <li className="nav-item active">
          <a href="#" className="nav-link">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
