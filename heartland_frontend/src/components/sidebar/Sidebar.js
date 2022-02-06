import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { Button } from "../styled/form/Button.style";

import { Sidebar as Side } from "../styled/Sidebar.styles";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Side>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/users">Users</NavLink>
        </li>
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
          <NavLink to="/dashboard/emergency">Emergency</NavLink>
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
