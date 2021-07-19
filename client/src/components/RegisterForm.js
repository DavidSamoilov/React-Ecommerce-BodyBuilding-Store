import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const RegisterForm = () => {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [password2Reg, setPassword2Reg] = useState("");
  const [firstNameReg, setFirstNameReg] = useState("");
  const register = () => {
    Axios.post(
      "http://localhost:5000/users/",
      { withCredentials: true },
      {
        email: emailReg,
        password: passwordReg,
        first_name: firstNameReg,
      }
    ).then((response) => {
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
          value={emailReg}
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        {/* <label>Password</label> */}
        <input
          type="text"
          placeholder="Password"
          value={passwordReg}
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        {/* <label>Repeat Password</label> */}
        <input
          type="text"
          placeholder="Repeat Password"
          value={password2Reg}
          onChange={(e) => {
            setPassword2Reg(e.target.value);
          }}
        />
        {/* <label>First Name</label> */}
        <input
          type="text"
          placeholder="First Name"
          value={firstNameReg}
          onChange={(e) => {
            setFirstNameReg(e.target.value);
          }}
        />
        <button className="btn" onClick={register}>
          {" "}
          Create Account{" "}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  text-align: center;
  background-color: rgb(243, 243, 243);
  padding: 50px;
  input {
    height: 40px;
  }
  button,
  input {
    width: 100%;
  }

  .registration {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;
  }
`;

export default RegisterForm;
