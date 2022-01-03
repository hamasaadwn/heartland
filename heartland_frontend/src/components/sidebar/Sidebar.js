import React from "react";
import { NavLink } from "react-router-dom";

import { Sidebar as Side } from "../styled/Sidebar.styles";

const Sidebar = () => {
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
      </ul>
    </Side>
  );
};

export default Sidebar;
