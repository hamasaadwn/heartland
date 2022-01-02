import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../../actions/postActions";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
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
