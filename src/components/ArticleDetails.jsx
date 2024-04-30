import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseApiUrl } from "../constants";
import { Link } from "react-router-dom";

const ArticleDetails = () => {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(baseApiUrl + "/posts/" + params.id + "?_embed=1")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ci sono problemi nel caricamento!");
        }
      })
      .then((objArticle) => {
        console.log(objArticle);
        setArticle(objArticle);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
  }, [params.id]);

  return (
    <>
      <Container className="mb-5">
        <Row>
          {isLoading ? (
            <div className="d-flex justify-content-center mt-5">
              <Spinner animation="border" variant="info" />
            </div>
          ) : (
            <Col className="mt-5">
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
                  {article._embedded["wp:term"] && (
                    <div>
                      {article._embedded["wp:term"][0].map((category) => (
                        <span key={category.id} className="badge rounded-pill text-bg-danger p-2 me-2">
                          {category.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <Card.Title className="display-4">{article.title.rendered}</Card.Title>
                  <h4>Author: {article._embedded["author"][0].name}</h4>
                  <Card.Text dangerouslySetInnerHTML={{ __html: article.content.rendered }}></Card.Text>
                  <Link to={"/"} className="mt-auto">
                    <Button variant="info">Go back</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default ArticleDetails;
