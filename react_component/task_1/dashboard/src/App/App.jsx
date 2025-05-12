import React, { Component } from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Login from "../Login/Login.jsx";
import CourseList from "../CourseList/CourseList.jsx";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils.js";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.notificationsList = [
      { id: uuidv4(), type: "default", value: "New course available" },
      { id: uuidv4(), type: "urgent", value: "New resume available" },
      { id: uuidv4(), type: "urgent", HTML: getLatestNotification() },
    ];

    this.coursesList = [
      { id: uuidv4(), name: "ES6", credit: 60 },
      { id: uuidv4(), name: "Webpack", credit: 20 },
      { id: uuidv4(), name: "React", credit: 40 },
    ];
  }

  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "h") {
      window.alert("Logging you out");
      this.props.logOut();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { isLoggedIn = false } = this.props;

    return (
      <>
        <div className="root-notifications">
          <Notifications
            notifications={this.notificationsList}
            displayDrawer={true}
          />
        </div>
        <Header />
        <div className="mainSection">
          {isLoggedIn ? <CourseList courses={this.coursesList} /> : <Login />}
        </div>
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  logOut: () => {},
};

export default App;
