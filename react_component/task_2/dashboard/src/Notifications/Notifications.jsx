import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem.jsx";
import { v4 as uuidv4 } from "uuid";

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { notifications = [], displayDrawer = false } = this.props;

    if (!displayDrawer) {
      return (
        <div className="notifications-title" role="paragraph">
          Your notifications
        </div>
      );
    }

    return (
      <div className="notifications">
        {notifications.length > 0 ? (
          <>
            <p>Here is the list of notifications</p>
            <button
              aria-label="Close"
              style={{ display: "inline" }}
              onClick={() => {
                console.log("Close button has been clicked");
              }}
              type="button"
            >
              <img src="/src/assets/close-button.png" alt="close button" />
            </button>
            <ul>
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id || uuidv4()}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.HTML}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </>
        ) : (
          <p>No new notification for now</p>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      HTML: PropTypes.string,
    })
  ),
  displayDrawer: PropTypes.bool,
};

export default Notifications;