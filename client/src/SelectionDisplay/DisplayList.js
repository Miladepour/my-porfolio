import { useState } from "react";
import Buttons from "./Buttons";
import List from "./List";

function DisplayList() {
  const [data, SetData] = useState([]);
  const [message, setMessage] = useState([]);
  return (
    <div className="displayList">
      <Buttons SetData={SetData} setMessage={setMessage} />
      <h4 className="listTitles">{message.quote}</h4>
      <p className="listSubTitles">{message.author}</p>
      <List allData={data} />
    </div>
  );
}

export default DisplayList;
