import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <label>Email:</label>
      <input type="email" id="email" size="30" required></input>
      <label>Password:</label>
      <input
        type="password"
        id="pwd"
        name="pwd"
        pattern=".{6,}"
        required
      ></input>
      <button>OK</button>
    </div>
  );
}

export default Login;
