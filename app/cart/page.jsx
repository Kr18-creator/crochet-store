"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/cart/all")
      .then((response) => setProducts(response.data.cart.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {products?.map((product, index) => (
        <ul key={index}>
          <li>{product.name}</li>
          <li>{product.price}</li>
        </ul>
      ))}
    </div>
  );
}

export default Cart;
