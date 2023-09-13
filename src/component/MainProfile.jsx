import { Component } from "react";
import { Button, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import ImgProfile from "../asset/avatar.png";

class MainProfile extends Component {
  render() {
    return (
      <Container className="pb-5 ">
        <Row className=" justify-content-center">
          <Col className="col-12 col-sm-8 ">
            <Row className="text-start gy-5 ">
              <Col className="col-12 text-white ">
                <h1>Edit Profile</h1>
                <hr />
              </Col>
              <Col className="col-4 col-lg-3 mt-0">
                <div className="position-relative">
                  <img src={ImgProfile} style={{ width: "160px", objectFit: "contain" }} alt="immagine profilo" />
                  <div className="position-absolute position-icon">
                    <i className="bi bi-pencil text-light dg-dark"></i>
                  </div>
                </div>
              </Col>
              <Col className="col-12 col-md-8 col-lg-9  px-md-4 text-white mt-md-0">
                <h2 className="bg-secondary text-white mt-0 ">Strive Student</h2>
                <p className="mt-4 text-white fs-4 mb-2">Language:</p>
                <DropdownButton
                  variant="white-outline"
                  size="sm"
                  className="text-white mt-4"
                  title="English"
                  aling="end"
                >
                  <Dropdown.Item className=" text-white " href="#/action-1">
                    French
                  </Dropdown.Item>
                  <Dropdown.Item className=" text-white " href="#/action-2">
                    Italian
                  </Dropdown.Item>
                </DropdownButton>
                <hr />
              </Col>
              <Col className="col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3 px-md-4 text-white mt-0">
                <p className="mt-2">Maturity Settings:</p>
                <Button variant="dark" className="text-white px-3 py-1 ">
                  All Maturity Ratings
                </Button>

                <br />
                <span className="mt-4">Show titles of all maturity ratings for this profile.</span>
                <br />
                <Button variant="secondary-outline" className="text-secondary border-secondary  mt-4 px-4 py-1 ">
                  EDIT
                </Button>
                <hr />
              </Col>
              <Col className="col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3  px-md-4 text-white mt-0">
                <h5>Autoplay controls</h5>
                <div className=" d-flex aling-items-center">
                  <input className="input" type="checkbox" />
                  <p className="mb-0 ms-3">Autoplay next episode in a series on all devices</p>
                </div>
                <div className=" d-flex aling-items-center">
                  <input className="input" type="checkbox" />
                  <p className="mb-0 ms-3">Autoplay previews while browsing on all devices</p>
                </div>
              </Col>
              <Col className="text-white mt-0">
                <hr />
                <Button variant="secondary-outline" className="text-secondary border-secondary mx-2">
                  SAVE
                </Button>
                <Button variant="secondary-outline" className="text-secondary border-secondary mx-2">
                  CANCEL
                </Button>
                <Button variant="secondary-outline" className="text-secondary border-secondary mx-2">
                  DELETE PROFILE
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MainProfile;
