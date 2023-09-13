import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilmsList = (props) => {
  // state = {
  //   films: [],
  //   respons: false,
  // };
  const [films, setFilms] = useState([]);
  const [respons, setRespons] = useState(false);
  const handleFetch = async () => {
    try {
      const resp = await fetch(props.url);
      const objFilms = await resp.json();
      const FilmsArrey = objFilms.Search;
      const sliceFilms = FilmsArrey.slice(0, 6);

      setFilms(sliceFilms);
      setRespons(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <Container fluid>
      <Row className="bg-black g-2 gy-2">
        <h4 className="text-start text-light mt-4">{props.title}</h4>
        {!respons && <Spinner variant="success" animation="border" role="status"></Spinner>}
        {films.map((film, index) => (
          <Col key={index} className="col-xs-6 col-md-4 col-lg-2 card-film">
            <Link to={"/movie/details/" + film.imdbID}>
              <Card className="bg-black">
                <Card.Img style={{ height: "250px", objectFit: "contain" }} variant="fluid" src={film.Poster} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FilmsList;
