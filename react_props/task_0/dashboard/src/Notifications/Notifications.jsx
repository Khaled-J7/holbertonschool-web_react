import "./Notifications.css";
import { getLatestNotification } from "../utils/utils.js";

function Notifications() {
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
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
        </ul>
      </div>
    </>
  );
}

export default Notifications;
