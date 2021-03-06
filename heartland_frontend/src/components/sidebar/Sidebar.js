import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { Button } from "../styled/form/Button.style";

import { Sidebar as Side } from "../styled/Sidebar.styles";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.user);
  const { userInfo } = userLogin;

  return (
    <Side>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {userInfo && userInfo.isAdmin && (
          <li>
            <NavLink to="/dashboard/users">Users</NavLink>
          </li>
        )}

        <li>
          <NavLink to="/dashboard/content">Content</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/maps">Maps</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/emergency">Emergency</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/rating">Rating</NavLink>
        </li>
        <li>
          <Button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            logout
          </Button>
        </li>
      </ul>
    </Side>
  );
};

export default Sidebar;
