import { useEffect, useState } from "react";
import { baseApiUrl } from "../constants";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(baseApiUrl + "/posts?_embed=1")
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
  }, []);
  return (
    <>
      <Container>
        <Row>
          {articles.map((article) => (
            <Col className="col-xs-12 col-md-4 col-lg-3 my-3" key={article.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    article._embedded["wp:featuredmedia"]
                      ? article._embedded["wp:featuredmedia"][0].source_url
                      : "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                />
                <Card.Body>
                  <Card.Title>{article.title.rendered}</Card.Title>
                  <Link to={"/details/" + article.id} className="mt-auto">
                    <Button variant="info">Show Details</Button>
                  </Link>
                  {/* <Card.Text>{article.content.rendered}</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
