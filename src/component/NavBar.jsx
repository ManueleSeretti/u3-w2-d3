import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../asset/logo.png";
const NavBar = (props) => {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} width="100" height="auto" className="d-inline-block align-middle" alt="Netflix Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=" text-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-secondary fw-bold">Home</Nav.Link>
            <Nav.Link className="text-white fw-bold">TV Show</Nav.Link>
            <Nav.Link className="text-secondary fw-bold">Movies</Nav.Link>
            <Nav.Link className="text-secondary fw-bold">Recently Add</Nav.Link>
            <Nav.Link className="text-secondary fw-bold">My list</Nav.Link>
          </Nav>
          <i className="bi bi-search text-light me-2"></i>
          <div id="kids" className="text-light">
            KIDS
          </div>
          <i className="bi bi-bell-fill text-light ms-2"></i>
          <i className="bi bi-person-fill text-light ms-2"></i>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
