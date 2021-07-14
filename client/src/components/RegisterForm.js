import Axios from "axios";
import React, { useEffect, useState } from 'react'
import styled from "styled-components";



const RegisterForm = () => {
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [password2Reg, setPassword2Reg] = useState("");
    const [firstNameReg, setFirstNameReg] = useState("");
    const register = () => {
        return 0
        Axios.post("http://localhost:5000/users/register",{withCredentials: true}, {
          email: emailReg,
          password: passwordReg,
        }).then((response) => {
          console.log(response);
        });
      };


    return (
        <Wrapper>
            <div className="registration">
        <h1>Registration</h1>
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <label>Repeat Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPassword2Reg(e.target.value);
          }}
        />
        <label>First Name</label>
        <input
          type="text"
          onChange={(e) => {
            setFirstNameReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>
        </Wrapper>
    )
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


export default RegisterForm
