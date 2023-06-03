import React from "react";
import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import experinceData from "../Data/experienceData.json";
import educationData from "../Data/educationData.json";
import volenteeringData from "../Data/volenteeringData.json";
import experienceQuotes from "../Data/experienceQuotes.json";
import educationQuotes from "../Data/educationQuotes.json";
import volenteeringQuotes from "../Data/volenteeringQuotes.json";
import project from "../Data/projects.json";
import styles from "./Buttons.module.css";

const Buttons = ({ SetData, setMessage }) => {
  const [isTitleVisible, setIsTitleVisible] = useState(true);

  function expOnClick() {
    let random = pickFromArray(experienceQuotes);
    SetData(experinceData);
    setMessage(random);
    setIsTitleVisible(false);
  }

  function eduOnClick() {
    let random = pickFromArray(educationQuotes);
    SetData(educationData);
    setMessage(random);
    setIsTitleVisible(false);
  }

  function volOnClick() {
    let random = pickFromArray(volenteeringQuotes);
    SetData(volenteeringData);
    setMessage(random);
    setIsTitleVisible(false);
  }

  function projectOnClick() {
    SetData(project);
    setIsTitleVisible(false);
  }

  return (
    <Container>
      <Row className="justify-content-center justify-content-md-between">
        <Col xs="auto">
          {isTitleVisible && (
            <h3 className={styles.title}>
              Explore my journey by clicking on the buttons
            </h3>
          )}
        </Col>
        <Col xs="auto">
          <Button
            onClick={expOnClick}
            variant="light"
            className={styles.button86}
          >
            Experiences
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            onClick={eduOnClick}
            variant="light"
            className={styles.button86}
          >
            Educations
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            onClick={volOnClick}
            variant="light"
            className={styles.button86}
          >
            Volunteering
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            onClick={projectOnClick}
            variant="light"
            className={styles.button86}
          >
            Projects
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default Buttons;
