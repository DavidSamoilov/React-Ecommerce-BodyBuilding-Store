import React, { useContext, useState } from "react";
const Cookies = require("js-cookie");

const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContext;
