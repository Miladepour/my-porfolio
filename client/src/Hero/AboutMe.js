import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <h3 className="aboutMeTitle">
            <span className="aboutMeTitle">01.</span>About Me
          </h3>
          <p className="aboutMeText">
            Greetings! I'm Milad E-pour, a web developer passionate about
            bringing ideas to life on the internet. My journey in web
            development began in 2015 when I delved into the world of WordPress
            and Wix, experimenting with editing websites. Since then, my
            fascination with creating online experiences has only grown. I
            specialize in designing and developing dynamic web applications
            using modern technologies. Let's collaborate and transform your
            vision into a captivating online presence.
          </p>
          <SocialIcon
            url="https://github.com/Miladepour"
            className="socialmedia"
            bgColor="#009290"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/milad-e-pour-a7a8a5239/"
            className="socialmedia"
          />
        </Col>
        <Col>
          {" "}
          <section className="leftSideSection">
            <p className="aboutMeText">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="aboutMeList">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>WordPress</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
            <img
              src="https://cynoco.co.uk/wp-content/uploads/2022/06/Untitled-design2.png"
              alt="Milad Ebrahimpour"
              className="personlImage"
            />
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
