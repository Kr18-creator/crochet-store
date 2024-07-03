"use client";
import React from "react";
import Link from 'next/link';
import axios from 'axios';


/**
 * Card component for displaying product information.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.productId - The ID of the product.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = ({ productId }) => {
  /**
   * Adds the product to the cart.
   *
   * @param {string} productId - The ID of the product to add to the cart.
   */


  const addToCart = (productId) => {
    axios.post('/cart', { productId })
      .then(response => {
        console.log(response.data.message); // Optional: Display a success message
        // TODO: Implement any additional logic after adding the product to the cart
      })
      .catch(error => {
        console.error('Error:', error);
        // TODO: Implement error handling if needed
      });
  };
  // const addToCart = (productId) => {
  //   fetch('/cart', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ productId })
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.message); // Optional: Display a success message
  //       // TODO: Implement any additional logic after adding the product to the cart
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       // TODO: Implement error handling if needed
  //     });
  // };

  return (
    <div className="card w-72 bg-base-100 shadow-xl m-2">
      <Link href={`/product/${productId}`}>
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href={'/cart'}>
            <button className="btn btn-primary" onClick={() => addToCart(productId)}>Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
