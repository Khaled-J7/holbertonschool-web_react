import React from "react";
import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications Component", () => {
  it("logs the correct message when a notification item is clicked", () => {
    const mockConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});

    const notificationsList = [
      { id: 1, type: "default", value: "Test notification" },
    ];

    render(<Notifications notifications={notificationsList} displayDrawer={true} />);
    const notificationItem = screen.getByText("Test notification");

    notificationItem.click();

    expect(mockConsoleLog).toHaveBeenCalledWith("Notification 1 has been marked as read");
    mockConsoleLog.mockRestore();
  });

  it("renders without crashing", () => {
    render(<Notifications />);
  });
});