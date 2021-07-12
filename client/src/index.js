import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { ProductsProvider } from "./context/products_context";
import {FilterProvider} from "./context/filter_context"
ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
