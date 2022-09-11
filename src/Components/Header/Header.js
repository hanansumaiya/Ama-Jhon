import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1>Ama-Jhon</h1>
        <div className="menu">
          <a href="/order">Order</a>
          <a href="/orderReview">Order Review</a>
          <a href="/manageInventory">Manage Inventory</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
