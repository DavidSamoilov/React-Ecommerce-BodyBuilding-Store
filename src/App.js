import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {LoginRegister} from "./pages"

function App() {
  return (
  <>
    <MainPage/>
    <LoginRegister/>
    </>
    )
  ;
}

export default App;
