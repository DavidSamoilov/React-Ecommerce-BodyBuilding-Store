import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products,grid_view } = useFilterContext();
  if(products.useFilterContext < 1){
    return <h5>no products matched your filters</h5>
  }
  if(grid_view === false){
    return <ListView products={products}/>
  }
  return <GridView products={products}>ProductList</GridView>;
};

export default ProductList;
