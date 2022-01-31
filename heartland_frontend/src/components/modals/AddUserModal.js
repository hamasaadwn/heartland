import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalContainer } from "../styled/Modal.style";
import { changeUserModal } from "../../actions/rootActions";
import { TwoColFlex } from "../styled/TwoColFlex.style";
import { Input } from "../styled/form/Input.style";
import { Button } from "../styled/form/Button.style";
import { Spacer } from "../styled/Spacer.style";
import { register, resetUserData } from "../../actions/userActions";
import ErrorMessages from "../messages/ErrorMessages";

const AddUserModal = () => {
  const dispatch = useDispatch();

  const regUser = useSelector((state) => state.regUser);
  const { errors, success } = regUser;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
    isAuthor: true,
  });

  const [passErr, setPassErr] = useState([]);

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

  const { name, email, confirmPassword, password, isAdmin, isAuthor } =
    formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(resetUserData());
    setPassErr([]);
    if (password !== confirmPassword) {
      setPassErr([
        {
          messageEn: "Passwords Should match",
          messageAr: "يجب أن تتطابق كلمات المرور",
          field: "general",
        },
      ]);
    } else {
      try {
        await dispatch(register(name, email, password, isAdmin, isAuthor));
        // console.log(errors);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (success) {
      dispatch(changeUserModal(false));
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAdmin: false,
        isAuthor: true,
      });
    }
    dispatch(resetUserData());
  }, [success, dispatch]);

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
                disabled={true}
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
                disabled={true}
              />
              {"  "}Author
            </div>
          </TwoColFlex>
          {errors && <ErrorMessages errors={errors} />}
          {passErr && <ErrorMessages errors={passErr} />}
          <Spacer top="20px" />
          <Button bg="#02a89e" fg="#ffffff">
            Create
          </Button>
        </form>
      </div>
    </ModalContainer>
  );
};

export default AddUserModal;
