import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./SearchResults.scss";
const SearchResults = ({ searchResults }) => {
  return (
    <Container>
      <p>Search</p>
      {searchResults.map((res) => {
        return (
          <Row key={res._id}>
            <Card style={{ width: "100%" }}>
              <Card.Body className="card-body">
                <Row>
                  <Col xs={3}>
                    <img
                      className="rounded-circle"
                      height="45"
                      src={res.picture}
                      alt="profile pic"
                    />
                  </Col>
                  <Col xs={9}>
                    <Row>
                      <Card.Title className="card-body__name">
                        {res.name}
                      </Card.Title>
                    </Row>
                    <Row>
                      <Card.Subtitle className="card-body__titles">
                        Desainer {res.company} &#8226; &nbsp;
                        {res.tags.join(" & ")}
                      </Card.Subtitle>
                    </Row>
                    <Row>
                      <Card.Subtitle className="mt-1">
                        Rating: Trophies:
                      </Card.Subtitle>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        );
      })}
    </Container>
  );
};

export default SearchResults;
