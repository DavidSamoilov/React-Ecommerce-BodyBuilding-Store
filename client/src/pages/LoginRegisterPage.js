import React from "react";
import styled from "styled-components";
import {LoginForm, RegisterForm} from "../components"
const LoginRegisterPage = () => {
  return (<Wrapper className="page-100">
         <LoginForm className="flex-child"/>
      <RegisterForm className="flex-child"/>

         
  </Wrapper>);
};

const Wrapper = styled.main`
display: flex;
justify-content: center;
.flex-child{
  flex: 1 1 0;
  width: 0;

}

@media (max-width:720px){
  flex-direction: column;
}

`
export default LoginRegisterPage;
