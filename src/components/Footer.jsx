import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className="mt-5 mb-0 py-2 text-center bg-black text-white">
      <Row className="d-flex">
        <Col className="col-12 col-md-2 mt-4">
          <Link to={"/"} className="text-decoration-none text-white ">
            Work white us
          </Link>
        </Col>
        <Col className="col-12 col-md-2 mt-4">
          <Link to={"/"} className="text-decoration-none text-white ">
            Hepl center
          </Link>
        </Col>
        <Col className="col-12 col-md-2 mt-4">
          <Link to={"/"} className="text-decoration-none text-white ">
            Privacy
          </Link>
        </Col>
        <Col className="col-12 col-md-2 mt-4">
          <Link to={"/"} className="text-decoration-none text-white ">
            Contact us
          </Link>
        </Col>
        <Col className="col-12 col-md-2 mt-4">
          <Link to={"/"} className="text-decoration-none text-white ">
            Cookie Preferences
          </Link>
        </Col>
        <Col className="col-12 col-md-2 mt-4">
          <Link to={"/"} className="text-decoration-none text-white ">
            Legal Notices
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4 border-top pt-2">
          <p className="mt-2"> &copy;2024 Web Site. Proudly powered by Giulia Lanari </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
