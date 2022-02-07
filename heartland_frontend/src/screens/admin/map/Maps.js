import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faExternalLinkAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { loadAllMaps, removeMap } from "../../../actions/mapsActions";
import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Button } from "../../../components/styled/form/Button.style";
import { Table } from "../../../components/styled/Table.style";
import { IconButton } from "../../../components/styled/form/IconButton.style";
import { toast, ToastContainer } from "react-toastify";

const Maps = () => {
  const dispatch = useDispatch();

  const { maps } = useSelector((state) => state.maps);

  useEffect(() => {
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
    dispatch(loadAllMaps());
  }, [dispatch]);

  const deleteHandler = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this document?\nهل تريد بالتأكيد حذف هذا المستند؟"
      )
    ) {
      try {
        await dispatch(removeMap(id));
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
                <td>
                  <IconButton
                    bg="#e3e3e3"
                    fg="#000000"
                    onClick={() => deleteHandler(m._id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </IconButton>
                  <Link to={`/dashboard/maps/${m._id}`}>
                    <IconButton bg="#e3e3e3" fg="#000000">
                      <FontAwesomeIcon icon={faEdit} />
                    </IconButton>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </AdminContainer>
  );
};

export default Maps;
