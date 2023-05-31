import { SocialIcon } from "react-social-icons";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./AboutMe.module.css";
import galexy from "../assets/galexy.png";

const AboutMe = () => {
  return (
    <Container className={styles.aboutMe}>
      <Row>
        <Col>
          <h3 className={styles.aboutMeTitle}>
            <span className={styles.aboutMeTitle}>01.</span>About Me
          </h3>
          <p className={styles.aboutMeText}>
            Greetings! I'm a web developer passionate about bringing ideas to
            life on the internet. My journey in web development began in 2015
            when I delved into the world of WordPress and Wix, experimenting
            with editing websites. Since then, my fascination with creating
            online experiences has only grown. I specialize in designing and
            developing dynamic web applications using modern technologies. Let's
            collaborate and transform your vision into a captivating online
            presence.
          </p>
        </Col>
        <Col>
          <p className={styles.aboutMeText}>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className={styles.aboutMeList}>
            <li>HTML & CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js (Express) </li>
            <li>MongoDB</li>
            <li>Postgre SQL</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Docker</li>
            <li>Google Cloud Platform</li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="text-center">
          <h3 style={{ fontSize: "70px", fontWeight: "bold" }}>
            My knowledge galaxy
          </h3>
          <Image src={galexy}></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
