import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import {
  createOrUpdateContact,
  createOrUpdateEmergency,
  loadEmergencies,
} from "../../../actions/emergencyActions";
import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";

import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Button } from "../../../components/styled/form/Button.style";
import { IconButton } from "../../../components/styled/form/IconButton.style";
import { Input } from "../../../components/styled/form/Input.style";
import { Select } from "../../../components/styled/form/Select.style";
import { Spacer } from "../../../components/styled/Spacer.style";
import { TwoColFlex } from "../../../components/styled/TwoColFlex.style";
import { Table } from "../../../components/styled/Table.style";

const Emergency = () => {
  const dispatch = useDispatch();
  const { emergencies } = useSelector((state) => state.emergency);

  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    type: "VOT",
    nameEN: "",
    nameAR: "",
    value: "",
    icon: "",
  });

  useEffect(() => {
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
    dispatch(loadEmergencies());
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await dispatch(
        createOrUpdateEmergency(
          formData.type,
          formData.value,
          formData.nameEN,
          formData.nameAR,
          formData.icon
        )
      );
      if (data) {
        setFormData({
          type: "VOT",
          nameEN: "",
          nameAR: "",
          value: "",
          icon: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const setInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //upload image handler
  const uploadImageHandler = async (e) => {
    const file = e.target.files[0];
    const formDataU = new FormData();
    formDataU.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formDataU, config);

      setFormData({ ...formData, icon: data });
      setUploading(false);
    } catch (error) {
      console.error(error);
      // addToast("دانانی وێنەکە سەرکەوتە نەبوو", {
      //   appearance: "error",
      // });
      setUploading(false);
    }
  };

  return (
    <AdminContainer>
      <form onSubmit={submitHandler}>
        <TwoColFlex>
          <div>
            <label>Type</label>
            <Select
              name="type"
              value={formData.type}
              onChange={setInput}
              require={true}
            >
              <option value="Emergency Contacts">Emergency Contacts</option>
              <option value="VOT">VOT</option>
            </Select>
          </div>
          <div>
            <label>Number</label>
            <Input
              bg="#ffffffdb"
              fg="#3d3d3d80"
              placeholder="Number"
              type="text"
              name="value"
              value={formData.value}
              onChange={setInput}
              required={true}
            />
          </div>
          <div>
            <label>Name English</label>
            <Input
              bg="#ffffffdb"
              fg="#3d3d3d80"
              placeholder="Name English"
              type="text"
              name="nameEN"
              value={formData.nameEN}
              onChange={setInput}
              required={true}
            />
          </div>
          <div>
            <label>Name Arabic</label>
            <Input
              bg="#ffffffdb"
              fg="#3d3d3d80"
              placeholder="Name Arabic"
              type="text"
              name="nameAR"
              value={formData.nameAR}
              onChange={setInput}
              required={true}
            />
          </div>
          <div>
            <label>Icon </label>
            <input type="file" name="icon" onChange={uploadImageHandler} />
          </div>
          <div>
            <Button bg="#02a89e" fg="#ffffff">
              Add Emergency Number
            </Button>
          </div>
        </TwoColFlex>
      </form>
      <Spacer top="30" />
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {emergencies &&
            emergencies.map((e) => (
              <tr key={e._id}>
                <td>{e.type}</td>
                <td>{e.nameEN}</td>
                <td>{e.value}</td>
                <td>
                  <IconButton
                    bg="#e3e3e3"
                    fg="#000000"
                    // onClick={() => deleteHandler(c._id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </IconButton>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </AdminContainer>
  );
};

export default Emergency;
