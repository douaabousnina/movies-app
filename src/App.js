import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { NavBar } from "./Components/NavBar";
import { MovieList } from "./Components/MovieList";
import axios from "axios";
import { Pages } from "./Components/Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetails } from "./Components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);

  // Fetch movies on initial render :
  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedData = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=b9059ee078b2ebb7f49a50ba95177238"
      );
      setMovies(fetchedData.data.results);
    };

    fetchMovies();
  }, []);

  // Filtering by search :
  // the query thing doesnt work 💭
  const filterBySearch = async (query) => {
    if (query) {
      const fetchedData = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=b9059ee078b2ebb7f49a50ba95177238&query=${query}"
      );
      setMovies(fetchedData.data.results);
    }
  };

  // Fetching page movies :
  const fetchPageMovies = async (page) => {
    const fetchedData = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b9059ee078b2ebb7f49a50ba95177238&page=" +
        page
    );
    setMovies(fetchedData.data.results);
  };



  return (
    <div>
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList movies={movies} fetchPageMovies={fetchPageMovies} />
              }
            />

            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
