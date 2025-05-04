import React from "react";
import "./Notifications.css";
import closeicon from "../assets/close-icon.png";
import { logClickClose, getLatestNotification } from "../utils/utils";

export function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
      <button
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          visibility: "hidden",
        }}
        aria-label="Close"
        onClick={logClickClose}
      >
        <img
          alt="close"
          src={closeicon}
          style={{
            height: "10px",
            width: "10px",
            visibility: "visible",
          }}
        />
      </button>
    </div>
  );
}

export default Notifications;
