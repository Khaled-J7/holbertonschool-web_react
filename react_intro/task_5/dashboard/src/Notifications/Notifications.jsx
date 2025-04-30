import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-button.png";
import { getLatestNotification } from "../utils/utils";

function Notifications() {
  // Function to handle the button click
  const handleCloseClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="notifications">
      <p>Here is the list of notifications</p>

      {/* Button to close notifications */}
      <button
        className="close-button"
        aria-label="Close"
        onClick={handleCloseClick}
      >
        <img src={closeIcon} alt="Close" />
      </button>

      {/* Unordered list for notifications */}
      <ul>
        {/* First item: Default priority (blue) */}
        <li data-priority="default">New course available</li>

        {/* Second item: Urgent priority (red) */}
        <li data-priority="urgent">New resume available</li>

        {/* Third item: Latest notification using dangerouslySetInnerHTML */}
        <li>
          <span
            dangerouslySetInnerHTML={{
              __html: getLatestNotification(),
            }}
            style={{ color: "red" }} // Apply red color explicitly
          />
        </li>
      </ul>
    </div>
  );
}

export default Notifications;
