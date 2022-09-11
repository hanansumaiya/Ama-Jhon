import React from "react";
import "./OrderSummery.css";

const OrderSummery = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = total + shipping + tax;

  return (
    <div className="order">
      <h2>Order Summery</h2>
      <div className="order-info">
        <p>Selected Items : {cart.length}</p>
        <p>Total Price : ${total}</p>
        <p>Shipping : $ {shipping}</p>
        <p>Tax : $ {tax}</p>
        <p className="grand-total">Grand Total : $ {grandTotal}</p>
      </div>
      <button>Clear Cart</button>
      <button>Review Order</button>
    </div>
  );
};

export default OrderSummery;
