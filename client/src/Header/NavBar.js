import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import styles from "./NavBar.module.css";
import { SocialIcon } from "react-social-icons";
import mobileMenuIcon from "../assets/menu.png";

const NavBar = () => {
  return (
    <Navbar
      bg="black"
      expand="lg"
      className={styles.navvv}
      // style={{
      //   background:
      //     "linear-gradient(to right, hsl(98 100% 62%), hsl(204 100% 59%))",
      // }}
    >
      <Container>
        <Navbar.Brand className={styles.logo}>Milad E-Pour</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.toggle}
        >
          <Image src={mobileMenuIcon} alt="Mobile Menu Icon" height={45} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/api/downloadcv"
              style={{ color: "#00406b", fontSize: "20px" }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="/api/downloadcv"
              style={{ color: "#00406b", fontSize: "20px" }}
            >
              Download Resume
            </Nav.Link>
            <SocialIcon
              url="https://github.com/Miladepour"
              bgColor="#00406b"
              style={{ height: 40, width: 40, marginLeft: "10px" }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/milad-e-pour-a7a8a5239/"
              bgColor="#00406b"
              style={{ height: 40, width: 40, marginLeft: "10px" }}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
