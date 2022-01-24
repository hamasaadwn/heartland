import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../actions/rootActions";
import { Container } from "../../components/styled/Container.style";
import { SearchInput } from "../../components/styled/form/Search.style";

const Search = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
  }, []);

  return (
    <Container>
      <SearchInput placeholder="Search" />
    </Container>
  );
};

export default Search;
