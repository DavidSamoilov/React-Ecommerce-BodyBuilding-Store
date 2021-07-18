import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/AuthApi";
import RegisterForm from "./RegisterForm";
const config = { headers: {'Content-Type' : 'application/json','Access-Control-Allow-Origin': 'http://localhost:5000'},withCredentials: true}

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuthContext();

  const login = () => {
    Axios.post("http://localhost:5000/users/login", {
      email: email,
      password: password,
    },{withCredentials: true}).then((response) => {
      setAuth(true)
      console.log("good");
    
      
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
