import { Component } from "react";
import NavBarProfile from "./NavBarProfile";
import { Container } from "react-bootstrap";
import MainProfile from "./MainProfile";

class Profile extends Component {
  render() {
    return (
      <Container fluid className="bg-black">
        <NavBarProfile />
        <MainProfile />
      </Container>
    );
  }
}
export default Profile;
