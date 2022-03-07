import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";

import {
  changeBackgroundToWhite,
  changeNavbar,
  changeUserModal,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { IconButton } from "../../../components/styled/form/IconButton.style";
import { Table } from "../../../components/styled/Table.style";
import { allUsers, removeUser } from "../../../actions/userActions";
import { Button } from "../../../components/styled/form/Button.style";
import AddUserModal from "../../../components/modals/AddUserModal";
import { TwoColFlex } from "../../../components/styled/TwoColFlex.style";

const Users = () => {
  console.log("teset");
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);

  const { userModal } = useSelector((state) => state.root);

  const { users } = userList;

  useEffect(() => {
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
    dispatch(allUsers());
  }, [dispatch]);

  const deleteHandler = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this user?\nهل تريد بالتأكيد حذف هذا المستخدم؟"
      )
    ) {
      try {
        await dispatch(removeUser(id));
        // addToast("بەکارهێنەر لابرا بە سەرکەوتووی", { appearance: "success" });
      } catch (err) {
        console.log(err);
        // addToast("لابردنی بەکارهێنەر سەرکەوتوو نەبوو", { appearance: "error" });
      }
    }
  };

  return (
    <AdminContainer>
      {userModal && <AddUserModal />}
      <TwoColFlex>
        <div>
          <Button
            bg="#02a89e"
            fg="#ffffff"
            onClick={() => dispatch(changeUserModal(true))}
          >
            Add User
          </Button>
        </div>
        <div></div>
      </TwoColFlex>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Is admin</th>
            <th>Is author</th>
            <th>Actions</th>
          </tr>
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
                  {/* <IconButton bg="#e3e3e3" fg="#000000">
                    <FontAwesomeIcon icon={faUserEdit} />
                  </IconButton> */}
                  <IconButton
                    bg="#e3e3e3"
                    fg="#000000"
                    onClick={() => deleteHandler(u._id)}
                  >
                    <FontAwesomeIcon icon={faUserTimes} />
                  </IconButton>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </AdminContainer>
  );
};

export default Users;
