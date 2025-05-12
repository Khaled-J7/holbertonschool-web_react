import React, { Component } from "react";
import "./App.css";

// Components
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Login from "../Login/Login.jsx";
import CourseList from "../CourseList/CourseList.jsx";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

// Utils
import { getLatestNotification } from "../utils/utils.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.notificationsList = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", HTML: getLatestNotification() },
    ];

    this.coursesList = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };

  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "h") {
      window.alert("Logging you out");
      this.props.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <div className="root-notifications">
          <Notifications notifications={this.notificationsList} displayDrawer={true} />
        </div>
        <Header />

        {/* News Section */}
        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>

        {/* Conditional Rendering */}
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList courses={this.coursesList} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}

        <Footer />
      </>
    );
  }
}

export default App;