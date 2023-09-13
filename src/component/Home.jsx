import { Container } from "react-bootstrap";
import Header from "./Header";
import FilmsList from "./FilmsList";
import Footer from "./Footer";

const Home = () => {
  return (
    <Container fluid className="bg-black">
      <Header />
      <FilmsList title="Treding Now" url="http://www.omdbapi.com/?apikey=7dd82326&s=harry-potter" />
      <FilmsList title="Watch it Again" url="http://www.omdbapi.com/?apikey=7dd82326&s=fast&furious" />
      <FilmsList title="New Releases" url="http://www.omdbapi.com/?apikey=7dd82326&s=natale" />
      <Footer />
    </Container>
  );
};

export default Home;
