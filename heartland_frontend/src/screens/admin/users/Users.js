import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faUserTimes } from "@fortawesome/free-solid-svg-icons";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { IconButton } from "../../../components/styled/IconButton.style";
import { Table } from "../../../components/styled/Table.style";
import { allUsers } from "../../../actions/userActions";

const Users = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);

  const { users } = userList;

  useEffect(() => {
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
    dispatch(allUsers());
  }, []);

  return (
    <AdminContainer>
      <Table>
        <thead>
          <th>name</th>
          <th>email</th>
          <th>is admin</th>
          <th>is author</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {users &&
            users.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.isAdmin ? "✓" : "✕"}</td>
                <td>{u.isAuthor ? "✓" : "✕"}</td>
                <td>
                  <IconButton bg="#e3e3e3" fg="#000000">
                    <FontAwesomeIcon
                      icon={faUserEdit}
                      className="style-fa-search"
                    />
                  </IconButton>
                  <IconButton bg="#e3e3e3" fg="#000000">
                    <FontAwesomeIcon
                      icon={faUserTimes}
                      className="style-fa-search"
                    />
                  </IconButton>
                </td>
              </tr>
            ))}
        </tbody>
        {/* <tr>
          <td>Hama</td>
          <td>hamasaadwn@gmail.com</td>
          <td>✓</td>
          <td>✓</td>
          <td>
            <IconButton bg="#e3e3e3" fg="#000000">
              <FontAwesomeIcon icon={faUserEdit} className="style-fa-search" />
            </IconButton>
            <IconButton bg="#e3e3e3" fg="#000000">
              <FontAwesomeIcon icon={faUserTimes} className="style-fa-search" />
            </IconButton>
          </td>
        </tr>
        <tr>
          <td>Hama</td>
          <td>hamasaadwn@gmail.com</td>
          <td>✓</td>
          <td>✓</td>
          <td>
            <IconButton bg="#e3e3e3" fg="#000000">
              <FontAwesomeIcon icon={faUserEdit} className="style-fa-search" />
            </IconButton>
            <IconButton bg="#e3e3e3" fg="#000000">
              <FontAwesomeIcon icon={faUserTimes} className="style-fa-search" />
            </IconButton>
          </td>
        </tr>
        <tr>
          <td>Hama</td>
          <td>hamasaadwn@gmail.com</td>
          <td>✓</td>
          <td>✓</td>
          <td>
            <IconButton bg="#e3e3e3" fg="#000000">
              <FontAwesomeIcon icon={faUserEdit} className="style-fa-search" />
            </IconButton>
            <IconButton bg="#e3e3e3" fg="#000000">
              <FontAwesomeIcon icon={faUserTimes} className="style-fa-search" />
            </IconButton>
          </td>
        </tr> */}
      </Table>
    </AdminContainer>
  );
};

export default Users;
