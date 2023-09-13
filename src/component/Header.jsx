import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0">
      <Container fluid className="bg-black ">
        <Navbar.Brand href="#home" className="text-white ">
          TV Show
        </Navbar.Brand>

        <Nav className="me-auto text-white">
          <NavDropdown className="text-white " title="Genrs" id="basic-nav-dropdown">
            <NavDropdown.Item className=" text-white" href="#action/3.1">
              Commedy
            </NavDropdown.Item>
            <NavDropdown.Item className=" text-white" href="#action/3.2">
              Drama
            </NavDropdown.Item>
            <NavDropdown.Item className=" text-white" href="#action/3.3">
              Triller
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <i className="bi bi-grid-fill text-light mx-4 fs-5"></i>
        <i className="bi bi-grid-3x3-gap-fill text-light fs-5"></i>
      </Container>
    </Navbar>
  );
};

export default Header;
