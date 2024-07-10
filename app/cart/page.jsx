"use client";
import React from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

function Cart() {
  const { data, error } = useSWR("http://localhost:8080/cart", fetcher);

  if (error) return <div>Error loading data.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.cart.products.map((product, index) => (
        <ul key={index}>
          <li>{product.name}</li>
          <li>{product.price}</li>
        </ul>
      ))}
    </div>
  );
}

export default Cart;
