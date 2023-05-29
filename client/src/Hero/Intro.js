import styles from "./Intro.module.css";
import introPic from "../assets/intpc.png";
import { Container, Row, Col, Image } from "react-bootstrap";
const Intro = () => {
  return (
    <Container className={styles.hero}>
      <Row>
        <Col>
          <p className={styles.heroFristP}>Hi, my name is 👋🏼</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className={styles.typewriter}>{"{Milad E-Pour};"}</h1>
          <h2 className={styles.textBelowName}>I build things for the web.</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className={styles.heroSecondP}>
            I’m a Jr <span>Software Developer</span> specializing in building
            (and occasionally designing) exceptional digital experiences.
            Currently, I’m focused on improving my skill with backend and
            database.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={5}>
          <Image src={introPic} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
