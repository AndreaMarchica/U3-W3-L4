import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Result } from "../interfaces/SpaceData";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const [spaceData, setSpaceData] = useState<Result[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles?limit=10&offset=10")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel caricamento dei dati!");
        }
      })
      .then((data) => {
        const articles = data.results;
        setSpaceData(articles);
        console.log(articles);
      })
      .catch((err) => {
        console.log("ERRORE", err);
      });
  }, []);

  return (
    <Container>
      <h2 className="my-5">Stay update with the latest space news!</h2>
      <Row>
        {spaceData.map((article) => (
          <>
            <Col key={article.id} md={8} className="mb-3 align-self-center ">
              <ListGroup>
                <ListGroup.Item>
                  <Link
                    to={`articleId}`}
                    onClick={() => navigate(`/articleId`)}
                  >
                    <h5 className="mb-3">{article.title}</h5>
                  </Link>
                  <p className="fs-6">{article.summary}</p>
                  <p className="d-flex justify-content-end fs-6">
                    Published At:{" "}
                    {format(new Date(article.published_at), "MMMM dd, yyyy")}
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4} className="align-self-center">
              {" "}
              <img
                src={article.image_url}
                alt="article space"
                className="articles-images my-3"
              />
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
};
export default Main;
