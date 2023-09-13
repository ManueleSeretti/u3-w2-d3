import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTgwZGMwMzRmZjAwMTQwM2Y0ZjMiLCJpYXQiOjE2OTQwODgzNTcsImV4cCI6MTY5NTI5Nzk1N30.vrJTCqAqY2RHrfENaHsCahiSPiXPbIGG0RZTWaBGmrQ",
  },
};
const MovieDetails = () => {
  const params = useParams();
  const idFilm = params.id;
  const [details, setDetails] = useState({});
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [comm, setComm] = useState({ comment: "", rate: "" });

  const DetailsFetch = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=7dd82326&i=" + idFilm);
      const data = await resp.json();

      setDetails(data);
    } catch (error) {}
  };
  useEffect(() => {
    DetailsFetch();
    commentFetch();
  }, []);

  const commentFetch = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/movies/" + idFilm + "/comments", options);
      const data = await resp.json();
      console.log(data);
      setComments(data);
    } catch (error) {}
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify({ ...comm, elementId: idFilm }),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTgwZGMwMzRmZjAwMTQwM2Y0ZjMiLCJpYXQiOjE2OTQwODgzNTcsImV4cCI6MTY5NTI5Nzk1N30.vrJTCqAqY2RHrfENaHsCahiSPiXPbIGG0RZTWaBGmrQ",
        },
      });
      if (resp.ok) {
        setComm({ comment: "", rate: "" });
      }
    } catch (error) {
      console.log(error);
    }
    commentFetch();
  };

  const handleDelete = async (event, id) => {
    event.preventDefault();
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTgwZGMwMzRmZjAwMTQwM2Y0ZjMiLCJpYXQiOjE2OTQwODgzNTcsImV4cCI6MTY5NTI5Nzk1N30.vrJTCqAqY2RHrfENaHsCahiSPiXPbIGG0RZTWaBGmrQ",
        },
      });
      console.log(resp.ok);
    } catch (error) {
      console.log(error);
    }
    commentFetch();
  };

  return (
    <Container fluid className="bg-black pb-5">
      <Row className="justify-content-center">
        <Col xs={6}>
          <Card className="bg-dark">
            <Card.Img variant="fluid" style={{ height: "300px", objectFit: "contain" }} src={details.Poster} />
            <Card.Body>
              <Card.Title className="text-start text-danger fs-2">{details.Title}</Card.Title>
              <Card.Text className="text-start text-white">Genere:{details.Genre}</Card.Text>
              <Card.Text className="text-start text-white">Trama:{details.Plot}</Card.Text>
              <Card.Text className="text-start text-white">Attori:{details.Actors}</Card.Text>
              <Card.Text className="text-start text-white">Duration: {details.Runtime}</Card.Text>
              <Button onClick={() => setShowComments(true)} variant="outline-info text-info">
                Vedi i Commenti
              </Button>
            </Card.Body>
          </Card>
        </Col>{" "}
        <Col xs={6}>
          {showComments ? (
            <>
              <ListGroup className="p-2 bg-secondary">
                <h5 className="text-info">Lista dei commenti:</h5>
                {comments.length === 0 && <Alert variant="info">Non ci sono commenti al momento</Alert>}
                {comments.map((comm, index) => (
                  <ListGroup.Item className="text-start" key={index}>
                    Autore : {comm.author} <br />
                    Commento : {comm.comment} <br />
                    Rate : {comm.rate}
                    <Button
                      className="ms-5"
                      variant="danger"
                      onClick={(event) => {
                        handleDelete(event, comm._id);
                      }}
                    >
                      delete
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Form className="mt-2 border bg-dark p-2" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-white">Aggiungi un Commento</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="commenta"
                    required
                    value={comm.comment}
                    onChange={(e) => {
                      setComm({ ...comm, comment: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    required
                    value={comm.rate}
                    onChange={(e) => {
                      setComm({ ...comm, rate: e.target.value });
                    }}
                  >
                    <option>Seleziona un voto da 1 a 5</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Invia
                </Button>
              </Form>
            </>
          ) : (
            <Alert variant="info">clicca per vedere i commenti</Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
