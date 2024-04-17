import React, { useState } from "react";
import { Col, Form, InputGroup, Navbar, Row, Button } from "react-bootstrap";

export const NavBar = ({ filterBySearch }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Navbar className="bg-body-tertiary justify-content-center">
      <Form inline>
        <Row className="justify-content-center d-flex">
          <Col>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </Col>
          <Col>
            <Button onClick={() => filterBySearch(searchValue)}>Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
};
