import { useState } from "react";
import Buttons from "./Buttons";
import List from "./List";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./DisplayList.module.css";

function DisplayList() {
  const [data, SetData] = useState([]);
  const [message, setMessage] = useState([]);
  return (
    <Container className={styles.display}>
      <Row>
        <Col>
          <Buttons SetData={SetData} setMessage={setMessage} />
          <h4 className="text-center pt-5">{message.quote}</h4>
          <p className="text-center pt-2">{message.author}</p>
          <List allData={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default DisplayList;
