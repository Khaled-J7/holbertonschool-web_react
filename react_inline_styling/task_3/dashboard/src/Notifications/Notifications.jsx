import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem.jsx";
import { v4 as uuid4 } from "uuid";
import { Component } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  notifications: {
    paddingRight: "0px",
    marginBottom: "10px",
    border: "3px dotted",
    borderColor: "#e1003c",
    display: "inline-block",
    position: "absolute",
    left: "73vw",
    top: "4vh",
    width: "400px",
    height: "100px",
    "@media (max-width: 900px)": {
      position: "absolute",
      width: "100%",
      top: "0px",
      left: "0px",
      height: "100%",
      border: "none",
      zIndex: "999",
      backgroundColor: "white",
      fontSize: "20px",
    },
  },
  notificationsTitle: {
    float: "right",
  },
  notificationsParagraph: {
    display: "inline-block",
    width: "97%",
    margin: "0px",
    paddingTop: "5px",
    paddingLeft: "5px",
  },
  CloseBtn: {
    border: "none",
    backgroundColor: "white",
    position: "absolute",
    right: "5px",
    top: "2px",
  },
  CloseBtnImage: {
    height: "10px",
    width: "10px",
  },
  UnordredList: {
    "@media (max-width: 900px)": {
      paddingLeft: "0px",
    },
  },
});

class Notifications extends Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.notifications.length != this.props.notifications.length) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log("rendered");
    if (this.props.displayDrawer == false) {
      return (
        <>
          <div className={css(styles.notificationsTitle)} role="paragraph">
            Your notifications
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={css(styles.notificationsTitle)} role="paragraph">
            Your notifications
          </div>
          <div className={css(styles.notifications)}>
            {this.props.notifications.length != 0 ? (
              <>
                <p className={css(styles.notificationsParagraph)}>
                  Here is the list of notifications
                </p>
                <button
                  className={css(styles.CloseBtn)}
                  aria-label="Close"
                  style={{ display: "inline" }}
                  onClick={() => {
                    console.log("Close button has been clicked");
                  }}
                  type="button"
                >
                  <img
                    src="/src/assets/close-button.png"
                    alt="close button"
                    className={css(styles.CloseBtnImage)}
                  />
                </button>
                <ul className={css(styles.UnordredList)}>
                  {this.props.notifications.map((obj) => (
                    <NotificationItem
                      key={uuid4()}
                      type={obj.type}
                      value={obj.value}
                      html={obj.HTML}
                      fn={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p className={css(styles.notificationsParagraph)}>
                No new notification for now
              </p>
            )}
          </div>
        </>
      );
    }
  }
}

Notifications.propTypes = {
  notifications: PropTypes.array,
  displayDrawer: PropTypes.bool,
};

export default Notifications;
