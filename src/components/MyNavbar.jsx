import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="md" bg="black" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/"} className="mt-auto text ">
            <img src={"logo.png"} alt="logo-brand" className="logo me-2" style={{ width: "10%" }} />
            Web Site
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link to={"/"} className="mt-auto text">
              Home
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
