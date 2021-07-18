import React, { useContext, useState } from "react";
import {useHistory } from "react-router-dom";
const Cookies = require("js-cookie");

const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [auth, setAuth] = useState(false);
  const logout = () => {
    Cookies.set("userCookie", []);
    setAuth(false)
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContext;
