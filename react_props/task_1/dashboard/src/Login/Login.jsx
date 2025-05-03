import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label>Email: </label>
        <input></input>
        <label>Password: </label>
        <input></input>
        <button>OK</button>
      </div>
    </>
  );
}

export default Login;
