import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { loadPostsList } from "../../actions/postActions";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../actions/rootActions";
import PostCards from "../../components/cards/PostCards";
import { Container } from "../../components/styled/Container.style";

const PostsList = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { posts } = useSelector((state) => state.postsList);
  const { language } = useSelector((state) => state.root);

  const category = params.type;

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
    dispatch(loadPostsList(language, category));
  }, [language, dispatch, category]);

  return (
    <Container>
      {posts &&
        posts.posts.map((p) => {
          return <PostCards key={p._id} post={p} />;
        })}
    </Container>
  );
};

export default PostsList;
