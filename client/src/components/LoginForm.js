import Axios from "axios";
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import RegisterForm from "./RegisterForm";


const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [loginStatus, setLoginStatus] = useState("");
   



  const login = () => {
    Axios.post("http://localhost:5000/users/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data.email);
      }
    });
  };

  // useEffect(() => {
  //   return 0

  //   Axios.get("http://localhost:5000/users/login",{withCredentials: true}).then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setLoginStatus(response.data.user[0].username);
  //     }
  //   });
  // }, []);

  return (
    <Wrapper className="App">
      
      <RegisterForm/>
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

      <h1>{loginStatus}</h1>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  text-align: center;


.registration, .login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  width: 250px;
  height: 40px;
}
`

export default LoginForm
