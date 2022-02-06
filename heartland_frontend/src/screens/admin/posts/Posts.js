import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { loadPosts, removePost } from "../../../actions/postActions";
import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Button } from "../../../components/styled/form/Button.style";
import { Table } from "../../../components/styled/Table.style";
import { IconButton } from "../../../components/styled/form/IconButton.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";

const Posts = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts);

  const { posts } = postList;

  useEffect(() => {
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
    dispatch(loadPosts());
  }, []);

  const deleteHandler = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this user?\nهل تريد بالتأكيد حذف هذا المستخدم؟"
      )
    ) {
      try {
        await dispatch(removePost(id));
        toast.success("Post has been removed successfully", {
          theme: "colored",
        });
      } catch (err) {
        console.log(err);
        toast.success("Error", { theme: "colored" });
      }
    }
  };

  return (
    <AdminContainer>
      <ToastContainer position="bottom-right" autoClose={5000} />
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
                <td>
                  <IconButton
                    bg="#e3e3e3"
                    fg="#000000"
                    onClick={() => deleteHandler(p._id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </IconButton>
                  <IconButton
                    bg="#e3e3e3"
                    fg="#000000"
                    onClick={() => deleteHandler(p._id)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </IconButton>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </AdminContainer>
  );
};

export default Posts;
