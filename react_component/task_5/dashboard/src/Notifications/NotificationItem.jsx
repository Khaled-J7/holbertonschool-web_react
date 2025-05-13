import React, { Component } from "react";
import PropTypes from "prop-types";

class NotificationItem extends Component {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    if (markAsRead && id !== undefined) {
      markAsRead(id);
    }
  };

  render() {
    const { type, value, html } = this.props;

    return (
      <li
        data-notification-type={type}
        onClick={this.handleClick}
        dangerouslySetInnerHTML={html ? { __html: html } : undefined}
        style={{ color: type === "urgent" ? "red" : "blue" }}
      >
        {!html && value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;