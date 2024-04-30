import { baseApiUrl } from "../constants";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const Edit = () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(baseApiUrl + "/posts/" + params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ci sono problemi nel caricamento!");
        }
      })
      .then((objPost) => {
        console.log(objPost);
        setPost({
          title: objPost.title.rendered,
          content: objPost.content.rendered,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
  }, [params.id]);

  const putArticle = (e) => {
    e.preventDefault();
    const authoString = btoa("Api-Rest:sPe4 5BTs d63O kAMe vTFG DD3r");
    fetch(baseApiUrl + "/posts/" + params.id, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + authoString,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ci sono problemi nel caricamento!");
        }
      })
      .then((objPost) => {
        setPost({
          title: objPost.title.rendered,
          content: objPost.content.rendered,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <Col className="col-12 col-md-10 mx-auto my-4">
      {isLoading ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <Form onSubmit={putArticle}>
          <Row className="mb-12">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title article"
                onChange={(e) => {
                  setPost((state) => ({
                    ...state,
                    title: e.target.value,
                  }));
                }}
                value={post.title}
              />
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Content</Form.Label>
              <Form.Control
                required
                type="text-area"
                placeholder="Content"
                onChange={(e) => {
                  setPost((state) => ({
                    ...state,
                    content: e.target.value,
                  }));
                }}
                value={post.content}
              />
            </Form.Group>
          </Row>

          <Button type="submit" className="mt-2">
            Edit
          </Button>
        </Form>
      )}
    </Col>
  );
};

export default Edit;
