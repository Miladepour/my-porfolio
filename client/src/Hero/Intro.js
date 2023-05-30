import styles from "./Intro.module.css";
import introPic from "../assets/ballabout.png";
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
            I am a junior <span>Software Developer</span> with a passion for
            creativity and innovation. My expertise lies in working with both
            front-end and back-end technologies, specifically with React and
            Node.js. I enjoy designing exceptional digital experiences and
            constantly strive to push the boundaries of what is possible on the
            web.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={5}>
          <Image src={introPic} />
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
