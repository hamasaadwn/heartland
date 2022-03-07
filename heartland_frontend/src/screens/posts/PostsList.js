import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

import { loadPostsList } from "../../actions/postActions";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../actions/rootActions";
import PostCards from "../../components/cards/PostCards";
import Pagination from "../../components/pagination/Pagination";
import { Container } from "../../components/styled/Container.style";

const PostsList = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(searchParams.get("p") || 1);

  const { posts } = useSelector((state) => state.postsList);
  const { language } = useSelector((state) => state.root);

  const category = params.type;

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
    dispatch(loadPostsList(language, category, currentPage));
  }, [language, dispatch, category, currentPage]);

  useEffect(() => {
    dispatch(loadPostsList(language, category, currentPage));
    setSearchParams(`p=${currentPage}`);
  }, [currentPage, dispatch, language, category, setSearchParams]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      {posts &&
        posts.posts.map((p) => {
          return <PostCards key={p._id} post={p} />;
        })}
      {posts && posts.pages && (
        <Pagination
          pages={posts.pages}
          paginate={paginate}
          current={currentPage}
        />
      )}
    </Container>
  );
};

export default PostsList;
