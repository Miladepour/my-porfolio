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
              {data.image ? (
                <li>
                  <img src={data.image} alt="Project" />
                </li>
              ) : (
                ""
              )}
              {data.link ? (
                <li>
                  <a href={data.link}>Visit this Website</a>
                </li>
              ) : (
                ""
              )}
            </ul>
            <p>{data.desc}</p>
            <hr className="dashed"></hr>
          </div>
        );
      })}
    </>
  );
}
export default List;
