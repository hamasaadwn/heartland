import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { loadPosts } from "../../../actions/postActions";
import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Button } from "../../../components/styled/form/Button.style";
import { Table } from "../../../components/styled/Table.style";

const Posts = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts);

  const { posts } = postList;

  useEffect(() => {
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
    dispatch(loadPosts());
  }, []);

  return (
    <AdminContainer>
      <Link to="/dashboard/posts/addpost">
        <Button bg="#02a89e" fg="#ffffff">
          Add Post
        </Button>
      </Link>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>State</th>
            <th>Views</th>
            <th>Type</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((p) => (
              <tr key={p._id}>
                <td>{p.title}</td>
                <td>{p.state}</td>
                <td>{p.views}</td>
                <td>{p.type}</td>
                <td>{p.createdAt}</td>
                <td>Actions</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </AdminContainer>
  );
};

export default Posts;
