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
  const { setAuth } = useAuthContext();

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
      setAuth(true);
      history.push("/");
    });
  };
  const loginDemo = () => {
    Axios.post(
      "http://localhost:5000/users/login",
      {
        email: "DemoUser@gmail.com",
        password: "DemoUser",
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
        <h3>Login</h3>
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
        <div className="login-btns">
          <button className="btn" onClick={login}>
            {" "}
            Login{" "}
          </button>
          <button className="btn" onClick={loginDemo}>
            {" "}
            * Login as Demo User *{" "}
          </button>
          <button className="btn" onClick={loginAdmin}>
            {" "}
            * Login as admin *{" "}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 50px;

  .login {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  input {
    height: 40px;
    width: 240px;
    /* width: 100%; */
  }
  .login-btns {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  @media (max-width:720px){
    input{
      width: 100%;
    }
}

`;

export default LoginForm;
