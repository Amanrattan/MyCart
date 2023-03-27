import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  console.log(props);
  return (
    // props.productList.lenght > 0 ?
    // : <h1>No Products Exits in thez</h1>
    //at agrumrnt(destructure or diretly) or
    //make prop object and put all object in that
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          index={i}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
        />
      );
    })
  );
}
