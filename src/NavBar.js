import React from "react";
import "./styles.css";

function NavBar() {
  return (
    <nav className="custom-navbar">
      <div className="navbar-left">
        <img src="https://assets.codepen.io/1468070/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1680524200&width=80" alt="logo" className="navbar-logo" />
        <span className="navbar-title">Image to ASCII Art</span>
      </div>
      <div className="navbar-right">
        <button className="navbar-btn pro">PRO</button>
        <button className="navbar-btn follow">+ Follow</button>
        <span className="navbar-author">Jon Kantner</span>
        <button className="navbar-btn login">Log In</button>
        <button className="navbar-btn signup">Sign Up</button>
      </div>
    </nav>
  );
}

export default NavBar;
