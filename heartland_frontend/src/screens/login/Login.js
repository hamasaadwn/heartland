import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { Button } from "../../components/styled/form/Button.style";
import { Input } from "../../components/styled/form/Input.style";
import { LoginCard } from "../../components/styled/LoginCard.style";
import { Spacer } from "../../components/styled/Spacer.style";
import { LoginContainer } from "./Login.style";
import { login } from "../../actions/userActions";
import ErrorMessages from "../../components/messages/ErrorMessages";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const { errors, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(formData.email, formData.password));
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

  return (
    <LoginContainer>
      <LoginCard>
        <Spacer top="20px" />
        <h2>Login</h2>
        <Spacer top="40px" />
        <form onSubmit={submitHandler}>
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
          <Spacer top="20px" />
          <Input
            bg="#3d3d3d80"
            fg="#ffffffdb"
            placeholder="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={setInput}
            required={true}
            minLength="8"
            maxLength="32"
          />
          <Spacer top="20px" />
          <Button bg="#02a89e" fg="#ffffff">
            Login
          </Button>
        </form>
        <Spacer top="20px" />
        {errors && <ErrorMessages errors={errors} />}
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
