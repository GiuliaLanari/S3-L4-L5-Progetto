import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = () => {
  return (
    <Navbar expand="md" bg="black" data-bs-theme="dark">
      <Container fluid>
        {/* <Navbar.Brand href="#home">
          <img src={"logo.jpeg"} alt="logo-brand" className="logo" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home" className="text ">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text ">
              Articoli
            </Nav.Link>
            {/* <Nav.Link href="#home" className="text ">
              Services
            </Nav.Link>
            <Nav.Link href="#link" className="text ">
              Contact
            </Nav.Link>
            <Nav.Link href="#link" className="text ">
              About
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
