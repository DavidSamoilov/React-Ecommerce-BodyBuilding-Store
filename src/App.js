import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {LoginRegister} from "./pages"

function App() {
  return (
  <>
    <HomePage/>
    <LoginRegister/>
    </>
    )
  ;
}

export default App;
