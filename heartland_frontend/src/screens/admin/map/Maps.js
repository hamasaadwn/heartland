import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { loadAllMaps } from "../../../actions/mapsActions";
import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Button } from "../../../components/styled/form/Button.style";

import { Table } from "../../../components/styled/Table.style";

const Maps = () => {
  const dispatch = useDispatch();

  const { maps } = useSelector((state) => state.maps);

  useEffect(() => {
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
    dispatch(loadAllMaps());
  }, [dispatch]);

  return (
    <AdminContainer>
      <Link to="/dashboard/maps/addcity">
        <Button bg="#02a89e" fg="#ffffff">
          Add City
        </Button>
      </Link>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {maps &&
            maps.map((m) => (
              <tr key={m._id}>
                <td>{m.name}</td>
                <td>delet</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </AdminContainer>
  );
};

export default Maps;
