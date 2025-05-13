import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { notifications = [], displayDrawer } = this.props;

    if (!displayDrawer) {
      return <div className="notifications-title" role="paragraph">Your notifications</div>;
    }

    return (
      <div className="notifications">
        <p>Here is the list of notifications</p>
        <button aria-label="Close" onClick={() => console.log("Close button has been clicked")} type="button">
          <img src="/src/assets/close-button.png" alt="close button" />
        </button>
        <ul>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              id={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.HTML}
              markAsRead={this.markAsRead}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      HTML: PropTypes.string,
    })
  ),
  displayDrawer: PropTypes.bool.isRequired,
};

export default Notifications;