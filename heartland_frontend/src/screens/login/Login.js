import React from "react";
import { Button } from "../../components/styled/Button.style";
import { Input } from "../../components/styled/Input.style";
import { LoginCard } from "../../components/styled/LoginCard.style";
import { Spacer } from "../../components/styled/Spacer.style";
import { LoginContainer } from "./Login.style";

const Login = () => {
  return (
    <LoginContainer>
      <LoginCard>
        <Spacer top="20px" />
        <h2>Login</h2>
        <Spacer top="40px" />
        <Input bg="#3d3d3d80" fg="#ffffffdb" placeholder="email" type="email" />
        <Spacer top="20px" />
        <Input
          bg="#3d3d3d80"
          fg="#ffffffdb"
          placeholder="password"
          type="password"
        />
        <Spacer top="20px" />
        <Button bg="#02a89e" fg="#ffffff">
          Login
        </Button>
        <Spacer top="20px" />
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
