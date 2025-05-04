import React from "react";
import "./Header.css";
import logo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </div>
  );
}

export default Header;
