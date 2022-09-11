import React from "react";
import "./Product.css";

const Product = ({ product, handleAddToCart, handleRemoveToCart }) => {
  // const { product, handleAddToCart } = props;

  const { id, name, seller, price, ratings, img } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-detail">
        <h3>{name}</h3>
        <p>Prices : $ {price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="product-button"
      >
        Add to Cart
      </button>
      <button className="remove" onClick={() => handleRemoveToCart(product)}>
        remove
      </button>
    </div>
  );
};

export default Product;
