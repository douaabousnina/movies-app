import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Col xs="6" md="4" lg="3" className="my-3">
      <Card style={{ width: "16rem" }}>
        <Card.Img
          variant="top"
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        />
        <Card.Body>
          <Card.Title>{movie.original_title}</Card.Title>
          <Card.Text>Release date : {movie.release_date}</Card.Text>
          <Card.Text>Reviews : {movie.vote_average} ⭐</Card.Text>
          <Link to={"/movie/" + movie.id}>
            <Button variant="primary">See movie details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
