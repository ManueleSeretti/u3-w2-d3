import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/details/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
