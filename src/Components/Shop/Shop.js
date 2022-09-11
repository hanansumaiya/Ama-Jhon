import React, { useEffect, useState } from "react";
import OrderSummery from "../OrderSummery/OrderSummery";
import Product from "../Product/Product";
import { addToDB, getStoredCart, removeFromDB } from "../Utility/fakeDb";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  //
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDB(product.id);
  };
  //
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedPro = products.find((pro) => pro.id === id);
      if (addedPro) {
        savedCart.push(addedPro);
      }
    }
    setCart(savedCart);
  }, [products]);
  //
  const handleRemoveToCart = (product) => {
    removeFromDB(product.id);
  };
  //
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            handleRemoveToCart={handleRemoveToCart}
          ></Product>
        ))}
      </div>
      <div className="order-container">
        <OrderSummery cart={cart}></OrderSummery>
      </div>
    </div>
  );
};

export default Shop;
