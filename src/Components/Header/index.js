import React from "react";
import "./Header.scss";
import { Container, Col, Row, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="mt-3 mb-2" fluid>
      <Row>
        <Col>
          <a className=" back__button" href="/">
            &larr;
          </a>
        </Col>
        <Col>
          <p className="ml-5 title">
            Undang Peserta Terbaik untik Tim Baru mu!
          </p>
        </Col>
        <Col>
          <span className="">x</span>
        </Col>
      </Row>

      <Nav className="mt-3" justify variant="tabs" defaultActiveKey="Desainer">
        <Nav.Item>
          <Nav.Link eventKey="Desainer">Desainer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Guru
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Header;
