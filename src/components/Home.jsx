import React, { useEffect, useState } from "react";
import { baseApiUrl } from "../constants";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [deletes, setDeletes] = useState(0);
  const [lastPage, setLastPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(baseApiUrl + "/posts?page=" + currentPage + "&_embed=1")
      .then((response) => {
        if (response.ok) {
          setLastPage(parseInt(response.headers.get("X-WP-TotalPages")));
          return response.json();
        } else {
          throw new Error("Ci sono problemi nel caricamento!");
        }
      })
      .then((objArticles) => {
        setArticles(objArticles);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [currentPage, deletes]);

  const changePage = (paga) => {
    setCurrentPage(paga);
  };

  function generatePaginationArray() {
    let paginationArr = [];
    for (let i = 1; i <= lastPage; i++) {
      paginationArr.push({
        n: i,
        active: currentPage === i,
      });
    }
    return paginationArr;
  }

  const deleteArticle = (articleId) => {
    const authoString = btoa("Api-Rest:sPe4 5BTs d63O kAMe vTFG DD3r");
    fetch(baseApiUrl + "/posts/" + articleId, {
      method: "DELETE",
      headers: {
        Authorization: "Basic " + authoString,
      },
    }).then((res) => {
      if (res.ok) {
        setDeletes(deletes + 1);
      }
    });
  };

  return (
    <>
      <Container>
        <Row>
          {articles.map((article) => (
            <Col className="col-xs-12 col-md-4 col-lg-3 my-3 " key={article.id}>
              <Card className="h-100 d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={
                    article._embedded["wp:featuredmedia"]
                      ? article._embedded["wp:featuredmedia"][0].source_url
                      : "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{article.title.rendered}</Card.Title>
                  <div className="d-flex justify-content-between">
                    <Link to={"/details/" + article.id} className="my-2">
                      <Button className="btn btn-outline-info text-white">Show Details</Button>
                    </Link>
                    <Link to={"/edit/" + article.id} className="my-2">
                      <Button variant="success">Edit</Button>
                    </Link>
                  </div>
                  <Button variant="danger" className="mt-auto" onClick={() => deleteArticle(article.id)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}

          <Col className="col-12  mx-auto my-2">
            <nav>
              <ul className="pagination  justify-content-center">
                <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                  <span className="page-link" onClick={() => currentPage !== 1 && changePage(currentPage - 1)}>
                    Previous
                  </span>
                </li>

                {generatePaginationArray().map((page) => (
                  <li key={page.n} className={`page-item ${page.active && "active"}`}>
                    <span className="page-link" onClick={() => changePage(page.n)}>
                      {page.n}
                    </span>
                  </li>
                ))}

                <li className={`page-item ${currentPage === "lastPage" && "disabled"}`}>
                  <span className="page-link" onClick={() => currentPage !== lastPage && changePage(currentPage + 1)}>
                    Next
                  </span>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
