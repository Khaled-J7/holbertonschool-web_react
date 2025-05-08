import "./App.css";
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Login from "../Login/Login.jsx";
import { Fragment } from "react";
import { getLatestNotification } from "../utils/utils.js";
import { v4 as uuidv4 } from "uuid";
import CourseList from "../CourseList/CourseList.jsx";
import PropTypes from "prop-types";

function App({ isLoggedIn = false }) {
  let notificationsList = [
    { id: uuidv4(), type: "default", value: "New course available" },
    { id: uuidv4(), type: "urgent", value: "New resume available" },
    { id: uuidv4(), type: "urgent", HTML: getLatestNotification() },
  ];
  let coursesList = [
    { id: uuidv4(), name: "ES6", credit: 60 },
    { id: uuidv4(), name: "Webpack", credit: 20 },
    { id: uuidv4(), name: "React", credit: 40 },
  ];
  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications notifications={notificationsList} />
      </div>
      <Header />
      {isLoggedIn == true ? (
        <CourseList courses={coursesList}></CourseList>
      ) : (
        <Login />
      )}
      <Footer />
    </Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
