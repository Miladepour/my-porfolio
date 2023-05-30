import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./List.module.css";

import ReactCountryFlag from "react-country-flag";
function List({ allData }) {
  return (
    <>
      {allData.map((data, index) => {
        return (
          <Card as="h5" style={{ color: "black" }}>
            <Card.Header
              key={index}
              className={styles.cardHeader}
              style={{ fontWeight: "bold" }}
            >
              {data.company} / {data.title}
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {data.location}
                <ReactCountryFlag countryCode={data.countryCode} />
              </Card.Title>
              <Card.Title>{data.date}</Card.Title>
              <Card.Text>{data.desc}</Card.Text>
              <Card.Text>
                {data.image ? <img src={data.image} alt="Project" /> : ""}
              </Card.Text>
              {data.link ? (
                <Button variant="primary" href={data.link}>
                  Visit this Website
                </Button>
              ) : (
                ""
              )}
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
export default List;
