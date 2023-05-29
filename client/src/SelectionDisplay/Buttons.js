import { useState } from "react";
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
  function porjectOnClick() {
    SetData(project);
    setIsTitleVisible(false);
  }
  return (
    <div>
      {isTitleVisible && (
        <h3 className={styles.title}>
          Explore my journey by clicking on the buttons
        </h3>
      )}
      <div className={styles.btnSelection}>
        <button
          onClick={expOnClick}
          value="experince"
          className={styles.button86}
        >
          Experiences
        </button>
        <button onClick={eduOnClick} className={styles.button86}>
          Educations
        </button>
        <button onClick={volOnClick} className={styles.button86}>
          Volenteering
        </button>
        <button onClick={porjectOnClick} className={styles.button86}>
          Projects
        </button>
      </div>
    </div>
  );
};
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
export default Buttons;
