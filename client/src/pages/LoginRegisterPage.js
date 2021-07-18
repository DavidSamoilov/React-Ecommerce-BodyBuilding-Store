import React from "react";
import styled from "styled-components";
import {LoginForm, RegisterForm} from "../components"
const LoginRegisterPage = () => {
  return (<Wrapper className="page-100">
         <LoginForm />
      <RegisterForm />

         
  </Wrapper>);
};

const Wrapper = styled.main`
display: flex;
justify-content: center;

`
export default LoginRegisterPage;
