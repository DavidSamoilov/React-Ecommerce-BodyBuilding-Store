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
        <h3>Create an account</h3>
        {/* <label>Email</label> */}
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        {/* <label>Password</label> */}
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        {/* <label>Repeat Password</label> */}
        <input
          type="text"
          placeholder="Repeat Password"
          onChange={(e) => {
            setPassword2Reg(e.target.value);
          }}
        />
        {/* <label>First Name</label> */}
        <input
          type="text"
          placeholder="First Name"

          onChange={(e) => {
            setFirstNameReg(e.target.value);
          }}
        />
        <button className="btn" onClick={register}> Create Account </button>
      </div>
        </Wrapper>
    )
}


const Wrapper = styled.main`
  text-align: center;
  background-color: rgb(243,243,243);
  padding:50px;

  padding:50px;

.registration{
  height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 2rem;
}
.login-btns{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

  
  input {
    width: 250px;
    height: 40px;
  }
`


export default RegisterForm
