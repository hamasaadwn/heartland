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
          <NavLink to="/admin/users">Users</NavLink>
        </li>
      </ul>
    </Side>
  );
};

export default Sidebar;
