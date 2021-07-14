import React from "react";
import styled from "styled-components";
import {LoginForm, RegisterForm} from "../components"
const LoginRegisterPage = () => {
  return (<Wrapper>
      <RegisterForm/>
         <LoginForm/>
  </Wrapper>);
};

const Wrapper = styled.main`
`
export default LoginRegisterPage;
