import "./Notifications.css";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem.jsx";
import { v4 as uuid4 } from "uuid";

function Notifications({ notifications = [], displayDrawer = false }) {
  if (displayDrawer == false) {
    return (
      <>
        <div className="notifications-title" role="paragraph">
          Your notifications
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="notifications-title" role="paragraph">
          Your notifications
        </div>
        <div className="notifications">
          {notifications.length != 0 ? (
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
                {notifications.map((obj) => (
                  <NotificationItem
                    key={uuid4()}
                    type={obj.type}
                    value={obj.value}
                    html={obj.HTML}
                  />
                ))}
              </ul>
            </>
          ) : (
            <p>No new notification for now</p>
          )}
        </div>
      </>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.array,
  displayDrawer: PropTypes.bool,
};

export default Notifications;
