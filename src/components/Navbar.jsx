import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import image from "../img/1.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Chat app</span>
      <div className="user">
        <img src={image} alt="" />
        <span>Mile</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
