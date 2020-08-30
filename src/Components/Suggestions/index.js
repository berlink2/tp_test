import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./Suggestions.scss";

//did not finish implementing this
const Suggestions = ({ suggestions }) => {
  return (
    <Container>
      <p>Suggestions</p>
      {suggestions.map((suggestion) => {
        return (
          <Row
            key={suggestion._id}
            onClick={(e) => suggestionClick(e, suggestion._id)}
          >
            <Card style={{ width: "100%" }}>
              <Card.Body className="card-body">
                <Row>
                  <Col xs={3}>
                    <img
                      className="rounded-circle"
                      height="45"
                      src={suggestion.picture}
                      alt="profile pic"
                    />
                  </Col>
                  <Col xs={9}>
                    <Row>
                      <Card.Title className="card-body__name">
                        {suggestion.name}
                      </Card.Title>
                    </Row>
                    <Row>
                      <Card.Subtitle className="card-body__titles">
                        Desainer {suggestion.company} &#8226; &nbsp;
                        {suggestion.tags.join(" & ")}
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

export default Suggestions;
