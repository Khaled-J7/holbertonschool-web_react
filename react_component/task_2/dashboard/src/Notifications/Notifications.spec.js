import React from "react";
import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications Component", () => {
  test("logs the correct message when a notification item is clicked", () => {
    const mockConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});

    const notificationsList = [
      { id: 1, type: "default", value: "New course available" },
    ];

    render(<Notifications notifications={notificationsList} displayDrawer={true} />);

    const notificationItem = screen.getByText("New course available");
    notificationItem.click();

    expect(mockConsoleLog).toHaveBeenCalledWith("Notification 1 has been marked as read");

    mockConsoleLog.mockRestore();
  });

  test("renders without crashing", () => {
    render(<Notifications />);
  });
});