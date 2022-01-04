import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadContact } from "../../../actions/contactActions";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Button } from "../../../components/styled/form/Button.style";
import { Input } from "../../../components/styled/form/Input.style";
import { Select } from "../../../components/styled/form/Select.style";
import { Spacer } from "../../../components/styled/Spacer.style";
import { Table } from "../../../components/styled/Table.style";
import { TwoColFlex } from "../../../components/styled/TwoColFlex.style";

const Contact = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);

  const [formData, setFormData] = useState({
    type: "phone",
    value: "",
  });

  useEffect(() => {
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
    dispatch(loadContact());
  }, []);

  const setInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <AdminContainer>
      <form>
        <TwoColFlex>
          <div>
            <label>Type</label>
            <Select
              name="type"
              value={formData.type}
              onChange={setInput}
              require={true}
            >
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">Youtube</option>
              <option value="linkedin">Linkedin</option>
            </Select>
          </div>
          <div>
            <label>Content</label>
            <Input
              bg="#ffffffdb"
              fg="#3d3d3d80"
              placeholder="Content"
              type="text"
              name="value"
              value={formData.value}
              onChange={setInput}
              required={true}
            />
          </div>
        </TwoColFlex>
        <Button bg="#02a89e" fg="#ffffff">
          Add Contact Info
        </Button>
      </form>
      <Spacer top="40px" />

      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((c) => (
              <tr key={c._id}>
                <td>{c.type}</td>
                <td>{c.value}</td>
                <td>Actions</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ul></ul>
    </AdminContainer>
  );
};

export default Contact;
