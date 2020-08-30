import React from "react";
import { InputGroup, FormControl, Container } from "react-bootstrap";

const Search = () => {
  return (
    <Container>
      <InputGroup className="">
        <FormControl
          placeholder="Cari Nama Peserta"
          aria-label="Search"
          aria-describedby="Search"
        />
      </InputGroup>
    </Container>
  );
};

export default Search;
