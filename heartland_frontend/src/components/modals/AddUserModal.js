import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "../styled/IconButton.style";
import { ModalContainer } from "../styled/Modal.style";
import { changeUserModal } from "../../actions/rootActions";
import { TwoColFlex } from "../styled/TwoColFlex.style";
import { Input } from "../styled/Input.style";
import { Button } from "../styled/Button.style";

const AddUserModal = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
    isAuthor: true,
  });

  const setInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const setCheckbox = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: !formData[event.target.name],
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    // try {
    //   await dispatch(login(formData.email, formData.password));
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <ModalContainer>
      <div className="modal">
        <FontAwesomeIcon
          icon={faTimes}
          className="style-fa-times"
          onClick={() => dispatch(changeUserModal(false))}
        />
        <form onSubmit={submitHandler}>
          <TwoColFlex>
            <div>
              <Input
                bg="#3d3d3d80"
                fg="#ffffffdb"
                placeholder="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={setInput}
                required={true}
                maxLength="32"
              />
            </div>
            <div>
              <Input
                bg="#3d3d3d80"
                fg="#ffffffdb"
                placeholder="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={setInput}
                required={true}
                maxLength="32"
              />
            </div>
            <div>
              <Input
                bg="#3d3d3d80"
                fg="#ffffffdb"
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={setInput}
                required={true}
                minLength="8"
                maxLength="32"
              />
            </div>
            <div>
              <Input
                bg="#3d3d3d80"
                fg="#ffffffdb"
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={setInput}
                required={true}
                minLength="8"
                maxLength="32"
              />
            </div>
            <div>
              <input
                bg="#3d3d3d80"
                fg="#ffffffdb"
                type="checkbox"
                name="isAdmin"
                checked={formData.isAdmin}
                onChange={setCheckbox}
                disabled="true"
              />
              {"  "}Admin
            </div>
            <div>
              <input
                bg="#3d3d3d80"
                fg="#ffffffdb"
                type="checkbox"
                name="isAuthor"
                checked={formData.isAuthor}
                onChange={setCheckbox}
                disabled="true"
              />
              {"  "}Author
            </div>
          </TwoColFlex>
          <Button bg="#02a89e" fg="#ffffff">
            Login
          </Button>
        </form>
      </div>
    </ModalContainer>
  );
};

export default AddUserModal;
