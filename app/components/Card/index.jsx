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

const Card = ({ productId, image, description, price , name}) => {
  /**
   * Adds the product to the cart.
   *
   * @param {string} productId - The ID of the product to add to the cart.
   */
  const addToCart = (productId) => {
    axios.post('http://localhost:8080/cart/add', { productId })
      .then(response => {
        console.log(response.data); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="card w-72 bg-base-100 shadow-xl m-2">
      <Link href={`/product/${productId}`}>
        <figure>
          <img src={image} alt="Product Image" />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="text-lg font-bold">${price}</p>
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
