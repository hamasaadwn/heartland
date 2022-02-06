import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../actions/rootActions";
import { Container } from "../../components/styled/Container.style";
import { SearchInput } from "../../components/styled/form/Search.style";
import { searchPosts } from "../../actions/postActions";
import PostCards from "../../components/cards/PostCards";
import Pagination from "../../components/pagination/Pagination";

const Search = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { posts } = useSelector((state) => state.searchResult);

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchPosts(keyword, currentPage));
  }, [currentPage]);

  const setInput = (event) => {
    setKeyword(event.target.value);
    dispatch(searchPosts(event.target.value));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <SearchInput
        placeholder="Search"
        name="keyword"
        value={keyword}
        onChange={setInput}
      />

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

export default Search;
