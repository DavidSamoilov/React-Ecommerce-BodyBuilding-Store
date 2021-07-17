import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { useAuthContext } from "./context/AuthApi";

// "react": "^17.0.2",
// "react-dom": "^17.0.2",
// "react-scripts": "4.0.3",

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  LoginRegister,
  Admin,
} from "./pages";
const Cookies = require("js-cookie");


function App() {
  const {auth,setAuth} = useAuthContext()
  
  const readCookie = () => {
    const user = Cookies.get("userCookie");
    if (user) {
      setAuth(true);
    }
  };
  useEffect(() => {
    readCookie();
  }, []);
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/login">
          <LoginRegister />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
