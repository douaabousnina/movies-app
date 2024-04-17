import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const params = useParams();

  // Fetching movie details :
  const fetchMovieDetails = async (id) => {
    const fetchedData = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=b9059ee078b2ebb7f49a50ba95177238"
    );
    setMovie(fetchedData.data);
  };
  useEffect(() => {
    fetchMovieDetails(params.id);
  }, []);

  return (
    <div>
        <br></br>
      <Card className="py-5">
        <Card.Title>{movie.original_title}</Card.Title>
        <Card.Body>
          <Row>
            <Col>
              <p>Release date : {movie.release_date} </p>
              <p>Rating : {movie.vote_average} ⭐</p>
            </Col>
            <Col lg="2">
              <Image
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                rounded
                className="w-50"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br></br>
      <Card className="py-5">
        <Card.Title>Movie story</Card.Title>
        <Card.Body>{movie.overview} </Card.Body>
      </Card>

      <Row className="mt-2 py-3 justify-content-center">
        <Col className="d-flex justify-content-center">
          <Link to={"/"}>
            <Button className="mx-4" variant="outline-danger">
              Go Back
            </Button>
          </Link>
          <Link>
            <Button variant="outline-success">Watch movie</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
