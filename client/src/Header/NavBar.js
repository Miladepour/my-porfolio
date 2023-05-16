import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';

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
            <Nav.Link
              href="#http://localhost:4000/download"
              style={{ color: 'white' }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="http://localhost:4000/download"
              style={{ color: 'white' }}
            >
              Download Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
