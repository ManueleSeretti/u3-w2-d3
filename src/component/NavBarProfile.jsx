import { Container, Navbar } from "react-bootstrap";
import logo from "../asset/logo.png";
import { Component } from "react";
class NavBarProfile extends Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-black">
        <Container fluid className="bg-black">
          <Navbar.Brand href="#home">
            <img src={logo} width="100" height="auto" className="d-inline-block align-middle" alt="Netflix Logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
export default NavBarProfile;
