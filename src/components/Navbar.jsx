import React from "react";
import image from "../img/1.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Chat app</span>
      <div className="user">
        <img src={image} alt="" />
        <span>Mile</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
