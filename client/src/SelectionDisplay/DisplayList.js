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
          <h4 className="listTitles">{message.quote}</h4>
          <p className="listSubTitles">{message.author}</p>
          <List allData={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default DisplayList;
