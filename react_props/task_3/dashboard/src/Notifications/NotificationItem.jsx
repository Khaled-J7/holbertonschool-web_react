import PropTypes from "prop-types";
import "./Notifications.css";

function NotificationItem({ type, html, value }) {
  if (html != undefined) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: html }}
        role="listitem"
      ></li>
    );
  } else {
    return (
      <li data-notification-type={type} role="listitem">
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.string,
  value: PropTypes.string,
};

export default NotificationItem;
