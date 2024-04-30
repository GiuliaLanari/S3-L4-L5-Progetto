import { baseApiUrl } from "../constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const AddPost = () => {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const postArticle = (e) => {
    e.preventDefault();
    const authoString = btoa("Api-Rest:sPe4 5BTs d63O kAMe vTFG DD3r");
    fetch(baseApiUrl + "/posts/", {
      method: "POST",
      body: JSON.stringify({ ...post, status: "publish" }),
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
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Col className="col-12 col-md-5 mx-auto my-4">
      <Form onSubmit={postArticle}>
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
            />
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Content</Form.Label>
            <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                onChange={(e) => {
                  setPost((state) => ({
                    ...state,
                    content: e.target.value,
                  }));
                }}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Button type="submit" className="mt-2">
          Edit
        </Button>
      </Form>
    </Col>
  );
};

export default AddPost;
