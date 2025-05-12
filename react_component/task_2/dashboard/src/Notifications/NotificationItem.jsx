import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import { v4 as uuid4 } from "uuid";

class NotificationItem extends Component {
  handleClick = () => {
    const { markAsRead, id } = this.props;
    if (markAsRead && id !== undefined) {
      markAsRead(id);
    }
  };

  render() {
    const { type, html, value } = this.props;

    return (
      <li
        data-notification-type={type}
        onClick={this.handleClick}
        dangerouslySetInnerHTML={html ? { __html: html } : undefined}
        style={{ color: type === "urgent" ? "red" : "blue" }}
      >
        {value || ""}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

export default NotificationItem;