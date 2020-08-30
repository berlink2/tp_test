import React, { useEffect, useState, useRef } from "react";
import { InputGroup, FormControl, Container } from "react-bootstrap";

const Search = ({ setIsSearch, setSearchQuery }) => {
  const handleChange = (e) => {
    let input = e.target.value;
    if (input) {
      setSearchQuery(() => input);
      setIsSearch(() => true);
    }
  };
  return (
    <Container>
      <InputGroup className="">
        <FormControl
          onChange={(e) => handleChange(e)}
          placeholder="Cari Nama Peserta"
          aria-label="Search"
          aria-describedby="Search"
        />
      </InputGroup>
    </Container>
  );
};

export default Search;
