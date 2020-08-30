import React from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import axios from "axios";
import Header from "./Components/Header/index";
import Search from "./Components/Search/index";

const app = () => {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
};

export default app;
