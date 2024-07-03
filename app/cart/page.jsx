"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/cart")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error(error));
  }, []);
  //     fetch('/cart')
  //         .then(response => response.json())
  //         .then(data => setProducts(data.products))
  //         .catch(error => console.error(error));
  // }, []);

  return (
    <div>
      {products?.map((product, index) => (
        <ul key={index}>{product}</ul>
      ))}
    </div>
  );
}

export default Cart;
