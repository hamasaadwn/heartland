import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../actions/rootActions";
import PostCards from "../../components/cards/PostCards";
import { Container } from "../../components/styled/Container.style";

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
  }, []);

  return (
    <Container>
      {[...Array(10)].map((x, i) => {
        return <PostCards key={i} />;
      })}
    </Container>
  );
};

export default PostsList;
