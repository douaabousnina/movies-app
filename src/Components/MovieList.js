import React from "react";
import { MovieCard } from "./MovieCard";
import { Row } from "react-bootstrap";
import { Pages } from "./Pages";

export const MovieList = ({ movies, fetchPageMovies }) => {
  return (
    <Row className="mt-3">
      {movies.length ? (
        movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })
      ) : (
        <div className="d-flex justify-content-center">
          <h1>Oups, we have no movies to show😐</h1>
        </div>
      )}
      <Pages fetchPageMovies={fetchPageMovies}/>
    </Row>
  );
};
