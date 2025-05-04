import "./App.css";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import React from "react";

function App() {
  return (
    <div>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
