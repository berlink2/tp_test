import React, { useEffect, useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import axios from "axios";
import Header from "./Components/Header/index";
import Search from "./Components/Search/index";
import "./app.scss";

const App = () => {
  const [users, setUsers] = useState([]);
  const [members, setMembers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://iunaptk810.execute-api.ap-southeast-1.amazonaws.com/dev/api/users"
      );
      console.log(res.data);
      setUsers((state) => [...state, ...res.data]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    users.forEach((user) => {
      if (user.isActive) {
        setMembers((state) => [...state, user]);
      } else {
        setSuggestions((state) => [...state, user]);
      }
    });
  }, [users]);

  return (
    <Container>
      <Header />
      <Search />
      {!isSearch ? (
        <Container>
          <Container>
            <p>Suggestions</p>

            {suggestions.map((suggestion) => {
              return (
                <Row key={suggestion._id}>
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
          <Container>
            <p>All Members</p>
            {members.map((member) => {
              return (
                <Row key={member._id}>
                  <Card style={{ width: "100%" }}>
                    <Card.Body className="card-body">
                      <Row>
                        <Col xs={3}>
                          <img
                            className="rounded-circle"
                            height="45"
                            src={member.picture}
                            alt="profile pic"
                          />
                        </Col>
                        <Col xs={9}>
                          <Row>
                            <Card.Title className="card-body__name">
                              {member.name}
                            </Card.Title>
                          </Row>
                          <Row>
                            <Card.Subtitle className="card-body__titles">
                              Desainer {member.company} &#8226; &nbsp;
                              {member.tags.join(" & ")}
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
        </Container>
      ) : (
        "Searching"
      )}
    </Container>
  );
};

export default App;
