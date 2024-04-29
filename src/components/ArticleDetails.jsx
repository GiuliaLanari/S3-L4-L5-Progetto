import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseApiUrl } from "../constants";
import { Link } from "react-router-dom";

const ArticleDetails = () => {
  const params = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(baseApiUrl + "/posts/" + params.id + "?_embed=1")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ci sono problemi nel caricamento!");
        }
      })
      .then((objArticles) => {
        console.log(objArticles);
        setArticles(objArticles);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [params.id]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              {/* <Card.Img
                variant="top"
                src={
                  articles._embedded["wp:featuredmedia"]
                    ? articles._embedded["wp:featuredmedia"][0].source_url
                    : "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
              /> */}
              <Card.Body>
                {/* <Card.Title>{articles.title.rendered}</Card.Title> */}
                {/* <Card.Text>{articles.content}</Card.Text> */}

                <Link to={"/"} className="mt-auto">
                  <Button variant="info">Go back</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArticleDetails;
