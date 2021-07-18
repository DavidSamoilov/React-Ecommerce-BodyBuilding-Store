import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuthContext } from "../context/AuthApi";
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:5000",
  },
  withCredentials: true,
};

const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setAuth } = useAuthContext();

  const login = () => {
    Axios.post(
      "http://localhost:5000/users/login",
      {
        email: email,
        password: password,
      },
      config
    ).then((response) => {
      if (response.id) {
        setAuth(true);
      }
    });
  };

  const loginAdmin = () => {
    Axios.post(
      "http://localhost:5000/users/login",
      {
        email: "dada7117@gmail.com",
        password: "admin",
      },
      config
    ).then((response) => {
      console.log(response);
      setAuth(true);
      console.log("good");
      history.push("/");
    });
  };

  return (
    <Wrapper className="App">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
        <button onClick={loginAdmin}> Login as admin </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  text-align: center;

  .registration,
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 250px;
    height: 40px;
  }
`;

export default LoginForm;
