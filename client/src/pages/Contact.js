import styles from "./Contact.module.css";
// import ContactFrom from "../Form/ContactForm";
import { Container, Row, Col,Image } from "react-bootstrap";

const Contact = () => {
  return (
    <Container fluid>
      <Row className={styles.pageHeader}>
        <Col
          style={{
            fontSize: "70px",
            textAlign: "center",
            fontWeight: "bold",
          }}
          className={styles.pageHeaderText}
        >
          Contact me
          <p
            className={styles.pageHeaderText}
            style={{ fontSize: "20px", textAlign: "center" }}
          >
            I'm happy to hearing from you
          </p>
        </Col>
      </Row>
      <Row className="pt-4 justify-content-around align-items-center">
        <Col>
          <h2 style={{fontStyle:"bold", fontSize:"50px"}}>Milad Ebrahimpour</h2>
          <h2>Get in touch</h2>
          <h3>
            I will get back to you as soon as possible. I look forward to
            hearing from you!
          </h3>
          <h5>
          epour.milad@gmail.com
          </h5>
        </Col>
        <Col>
        <Image className={styles.contactImage} src="https://cynoco.co.uk/wp-content/uploads/2023/09/Untitled-design-7.png" fluid></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
