import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./AboutMe.module.css";
import galexy from "../assets/galexy.png";

const AboutMe = () => {
  return (
    <Container className={styles.aboutMe} fluid>
      <Row className="mb-5">
        <Col>
          <h3 className={styles.aboutMeTitle}>
            <span className={styles.aboutMeTitle}>01.</span>About Me
          </h3>
          <p className={styles.aboutMeText}>
            Greetings! As a full-stack web developer with a passion for modern
            technologies, I excel in creating scalable and user-centered web
            applications using the MERN stack. My strong technical skills,
            combined with exceptional interpersonal abilities, enable me to
            effectively communicate and collaborate with clients from diverse
            backgrounds. 
            <br />
            Bringing new ideas to life and a constant thirst for
            knowledge and growth drive me to continuously enhance my IT skills.
            My ultimate goal is to use my technical expertise to make a positive
            impact on individuals and organizations. My skill set as a
            full-stack developer encompasses HTML, CSS, JavaScript, React, Node,
            SQL, MongoDB, and Jest. I have hands-on experience in designing,
            developing, and deploying web applications, and I am proud to have
            completed several successful projects during my studies. 
            <br />
            I am also an active member of the tech community, having contributed to
            open-source projects and delivered speeches at events. In the
            future, I aim to continue learning and growing as a web developer,
            making a positive impact on the industry.
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
            <li>AWS</li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="text-center">
          <h3 style={{ fontSize: "70px", fontWeight: "bold" }}>
            My knowledge galaxy
          </h3>
          <Image src={galexy} fluid></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
