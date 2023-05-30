import styles from "./Portfolio.module.css";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import project from "../Data/projects.json";

const Portfolio = () => {
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
          Portfolio
          <p
            className={styles.pageHeaderText}
            style={{ fontSize: "20px", textAlign: "center" }}
          >
            here you can find my latest projects
          </p>
        </Col>
      </Row>
      <Row className="pt-4">
        <Col className="p-4 d-flex flex-wrap justify-content-around">
          {project.map((data, index) => {
            return (
              <Card style={{ width: "25rem", color: "black" }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    {data.company} / {data.title}
                  </Card.Title>
                  <Card.Text>{data.desc}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <strong>Technologies:</strong> {data.tech}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Tools:</strong> {data.tools}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Project Location:</strong> {data.projectLocation}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>My Role:</strong> {data.myRole}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={data.link}>Project link</Card.Link>
                  <Card.Link href={data.github}>Github Link</Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
