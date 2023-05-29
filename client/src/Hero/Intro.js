import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styels from "./Intro.module.css";
const Intro = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p className="heroFristP">Hi, my name is 👋🏼</p>
        </Col>
        <Col>
          <div className="nameAnimation">
            <h1 className="typewriter">{"{Milad E-Pour}"}</h1>
            <h2 className="textBelowName">I build things for the web.</h2>
          </div>
        </Col>
        <Col>
          <p className="heroSecondP">
            I’m a Jr <span>software developer</span> specializing in building
            (and occasionally designing) exceptional digital experiences.
            Currently, I’m focused on improving my skill with backend and
            database.
          </p>
        </Col>
      </Row>
    </Container>
    // <div>
    //   <div className="heroSection">
    //

    //   </div>
    // </div>
  );
};

export default Intro;
