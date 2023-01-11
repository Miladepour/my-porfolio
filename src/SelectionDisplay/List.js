import ReactCountryFlag from "react-country-flag";
function List({ allData }) {
  return (
    <>
      {allData.map((data, index) => {
        return (
          <div className="list">
            <h3 key={index} className="listTitlePlusSub">
              {data.title}
            </h3>
            <h6 key={index} className="listTitlePlusSub">
              {data.company}
            </h6>
            <ul className="list">
              <li key={index}>{data.date}</li>
              <li key={index}>
                <ReactCountryFlag countryCode={data.countryCode} />
                {data.location}
              </li>
              <li key={index}>{data.desc}</li>
            </ul>
            <hr className="dashed"></hr>
          </div>
        );
      })}
    </>
  );
}
export default List;