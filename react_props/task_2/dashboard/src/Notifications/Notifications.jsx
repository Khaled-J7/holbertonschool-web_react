import "./Notifications.css";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem.jsx";

function Notifications({ notifications = [] }) {
  return (
    <>
      <div className="notifications">
        <p role="paragraph">Here is the list of notifications</p>
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
          {notifications.map((obj) => {
            return (
              <NotificationItem
                key={obj.id}
                type={obj.type}
                value={obj.value}
                html={obj.HTML}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array,
};

export default Notifications;
