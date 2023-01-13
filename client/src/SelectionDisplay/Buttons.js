import experinceData from "../Data/experienceData.json";
import educationData from "../Data/educationData.json";
import volenteeringData from "../Data/volenteeringData.json";
import experienceQuotes from "../Data/experienceQuotes.json";
import educationQuotes from "../Data/educationQuotes.json";
import volenteeringQuotes from "../Data/volenteeringQuotes.json";

const Buttons = ({ SetData, setMessage }) => {
  function expOnClick() {
    let random = pickFromArray(experienceQuotes);
    SetData(experinceData);
    setMessage(random);
  }

  function eduOnClick() {
    let random = pickFromArray(educationQuotes);
    SetData(educationData);
    setMessage(random);
  }

  function volOnClick() {
    let random = pickFromArray(volenteeringQuotes);
    SetData(volenteeringData);
    setMessage(random);
  }
  return (
    <div>
      <h3 className="titleAboveBtn">
        Explore my journey by clicking on the buttons
      </h3>
      <div className="btnSelection">
        <button onClick={expOnClick} value="experince" className="button-86">
          Experiences
        </button>
        <button onClick={eduOnClick} className="button-86">
          Educations
        </button>
        <button onClick={volOnClick} className="button-86">
          Volenteering
        </button>
        <button className="button-86">Projects</button>
      </div>
    </div>
  );
};
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
export default Buttons;
