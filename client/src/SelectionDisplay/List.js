import { Image, Button, Card } from "react-bootstrap";
import styles from "./List.module.css";
import ReactCountryFlag from "react-country-flag";

function List({ allData }) {
  return (
    <>
      {allData.map((data, index) => {
        return (
          <Card as="h5" style={{ color: "black" }} key={index}>
            <Card.Header
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
              <Card.Text className="text-center">
                {data.image && (
                  <Image
                    src={data.image}
                    alt="Project"
                    className={styles.image}
                    fluid
                  />
                )}
              </Card.Text>
              {data.link && (
                <Button className={styles.button86} href={data.link}>
                  Visit this Website
                </Button>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default List;
