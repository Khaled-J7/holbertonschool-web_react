import "./App.css";
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Login from "../Login/Login.jsx";
import BodySecion from "../BodySection/BodySection.jsx";
import BodySecionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.jsx";
import { Fragment, Component } from "react";
import { getLatestNotification } from "../utils/utils.js";
import { v4 as uuidv4 } from "uuid";
import CourseList from "../CourseList/CourseList.jsx";
import PropTypes from "prop-types";

class App extends Component {
  notificationsList = [
    { id: uuidv4(), type: "default", value: "New course available" },
    { id: uuidv4(), type: "urgent", value: "New resume available" },
    { id: uuidv4(), type: "urgent", HTML: getLatestNotification() },
  ];
  coursesList = [
    { id: uuidv4(), name: "ES6", credit: 60 },
    { id: uuidv4(), name: "Webpack", credit: 20 },
    { id: uuidv4(), name: "React", credit: 40 },
  ];

  eventFunction = (e) => {
    if (e.ctrlKey && (e.key == "h" || e.key == "H")) {
      alert("Logging you out");
      this.props.logOut();
    }
  };

  componentDidMount() {
    let bodyElem = document.body;
    bodyElem.addEventListener("keydown", this.eventFunction);
  }

  componentWillUnmount() {
    let bodyElem = document.body;
    bodyElem.removeEventListener("keydown", this.eventFunction);
  }

  render() {
    return (
      <Fragment>
        <div className="root-notifications">
          <Notifications
            notifications={this.notificationsList}
            displayDrawer={true}
          />
        </div>
        <Header />
        <div className="mainSection">
          {this.props.isLoggedIn == true ? (
            <BodySecionWithMarginBottom title="Course list">
              <CourseList courses={this.coursesList}></CourseList>
            </BodySecionWithMarginBottom>
          ) : (
            <BodySecionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySecionWithMarginBottom>
          )}
          <BodySecion title="News from the School">
            <p>Holberton School News goes here</p>
          </BodySecion>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
