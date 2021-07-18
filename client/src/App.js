import React, { useEffect} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { useAuthContext } from "./context/AuthApi";
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
  const { setAuth } = useAuthContext();
  const readCookie = () => {
    const user = Cookies.getJSON("userCookie");
    console.log(user);
    if(user){
      if (user.id) {
        setAuth(true);
      }
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
