import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import axios from "axios";
import Header from "./Components/Header/index";
import Search from "./Components/Search/index";
import "./app.scss";

import { connect } from "react-redux";
import { getUsers } from "./actions";

const App = (props) => {
  const [users, setUsers] = useState([]);
  const [members, setMembers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [newMembers, setNewMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const joinButton = useRef(null);

  useEffect(() => {
    props.getUsers();
  }, []);

  useEffect(() => {
    console.log(props);

    if (props.data.users.length > 0) {
      setUsers((state) => [...state, ...props.data.users]);
    }
  }, [props]);

  useEffect(() => {
    users.forEach((user) => {
      if (user.isActive) {
        setMembers((state) => [...state, user]);
      } else {
        setSuggestions((state) => [...state, user]);
      }
    });
  }, [users]);

  useEffect(() => {
    if (newMembers.length > 0) {
      joinButton.current.removeAttribute("disabled");
      joinButton.current.removeAttribute("variant");
      joinButton.current.setAttribute("class", "btn btn-primary");
    }
  }, [newMembers]);

  useEffect(() => {
    if (searchQuery !== "") {
      searchUsers(searchQuery);
    }
  }, [searchQuery]);

  const suggestionClick = (e, userId) => {
    const userObj = suggestions.find((user) => user._id === userId);
    const newSuggestions = suggestions.filter((user) => {
      return user._id !== userId;
    });
    setSuggestions(() => [...newSuggestions]);
    setNewMembers((state) => [...state, userObj]);
  };

  const searchUsers = (query) => {
    const res = users.filter((user) => {
      return user.name.toLowerCase().includes(query.toLowerCase());
    });

    setSearchResults(() => [...res]);
  };

  return (
    <Container className="mb-5">
      <Header />
      <Search setIsSearch={setIsSearch} setSearchQuery={setSearchQuery} />
      {!isSearch ? (
        <Container>
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
      )}
      {newMembers.length > 0 && (
        <Container>
          <Row className="d-flex flex-row justify-content-between">
            <Col className="mr-auto">Recipient</Col>
            <Col className="ml-auto">Clear All</Col>
          </Row>
          <Row>
            {newMembers.length > 0 &&
              newMembers.map((user) => {
                return (
                  <Button
                    size="sm"
                    className="mr-1"
                    variant="secondary"
                    key={user._id}
                  >
                    {user.name}
                    &nbsp; x
                  </Button>
                );
              })}
          </Row>
        </Container>
      )}

      <Container className="text-center mt-3 mb-3 join-button">
        <Button ref={joinButton} variant="secondary" disabled>
          Undang Bergabung{" "}
          {newMembers.length > 0 ? `(${newMembers.length})` : ""}
        </Button>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUsers })(App);
