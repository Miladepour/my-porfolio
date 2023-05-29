import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';
import { SocialIcon } from 'react-social-icons';
const NavBar = () => {
  return (
    <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand className={styles.logo}>Milad E-Pour</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.toggleButton}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/api/downloadcv" style={{ color: 'white' }}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="/api/downloadcv" style={{ color: 'white' }}>
              Download Resume
            </Nav.Link>
            <SocialIcon
              url="https://github.com/Miladepour"
              className="socialmedia"
              bgColor="#009290"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/milad-e-pour-a7a8a5239/"
              className="socialmedia"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
