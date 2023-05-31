import styles from "./Contact.module.css";
import ContactFrom from "../Form/ContactForm";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

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
      <Row className="pt-4 justify-content-around">
        <Col>
          <h2>Feel free to contact me by filling out the following form</h2>
        </Col>
        <Col>
          <ContactFrom />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
