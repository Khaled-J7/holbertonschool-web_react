import PropTypes from "prop-types";
import "./Notifications.css";
import { v4 as uuid4 } from "uuid";

function NotificationItem({ type, html, value }) {
  if (html != undefined) {
    return (
      <li
        key={uuid4()}
        data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: html }}
        role="listitem"
      ></li>
    );
  } else {
    return (
      <li key={uuid4()} data-notification-type={type} role="listitem">
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
