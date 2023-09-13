import { Button, Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="pb-5 mt-5">
      <Row className=" justify-content-center">
        <Col className="col-8 offset-1 ">
          <Row className="text-start gy-1">
            <Col className="col-12 text-secondary">
              <i class="bi bi-facebook me-2 fs-5"></i>
              <i class="bi bi-twitter me-2 fs-5"></i>
              <i class="bi bi-instagram me-2 fs-5"></i>
              <i class="bi bi-youtube me-2 fs-5"></i>
            </Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3 text-secondary">Audio and Subtitles</Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3  text-secondary">Media Center</Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3  text-secondary">Privacy</Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3  text-secondary">Conctat us</Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3  text-secondary">Audio Description</Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3  text-secondary">Investor Relations</Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3  text-secondary">LegalNotices</Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3  text-secondary">Help Center</Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3  text-secondary">Jobs</Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3  text-secondary">Cookie Preferences</Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3  text-secondary">Gift Cards</Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3  text-secondary">Terms of Use</Col>
            <Col className="col-12 col-md-6 col-lg-4 col-xl-3  text-secondary">Corporate Information</Col>
            <Col className="col-12">
              <Button variant="secondary-outline" className="text-secondary border-secondary mt-3">
                Service Code
              </Button>
            </Col>
            <Col className="text-secondary mt-2 foter-text"> © 1997-2022 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
