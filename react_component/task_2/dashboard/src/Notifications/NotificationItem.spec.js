import React from "react";
import { render, screen } from "@testing-library/react";
import NotificationItem from "./NotificationItem.jsx";

describe("NotificationItem Component", () => {
  test("calls the markAsRead prop when clicked", () => {
    const mockMarkAsRead = jest.fn();
    const defaultProps = {
      id: 1,
      type: "default",
      value: "Test notification",
      markAsRead: mockMarkAsRead,
    };

    render(<NotificationItem {...defaultProps} />);
    const liElement = screen.getByText("Test notification");

    liElement.click();

    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });

  test("applies the correct color for 'default' type", () => {
    const defaultProps = {
      id: 1,
      type: "default",
      value: "Default notification",
      markAsRead: () => {},
    };
    const { container } = render(<NotificationItem {...defaultProps} />);
    const li = container.querySelector("li");
    expect(li).toHaveStyle("color: blue");
  });

  test("applies the correct color for 'urgent' type", () => {
    const defaultProps = {
      id: 2,
      type: "urgent",
      value: "Urgent notification",
      markAsRead: () => {},
    };
    const { container } = render(<NotificationItem {...defaultProps} />);
    const li = container.querySelector("li");
    expect(li).toHaveStyle("color: red");
  });

  test("has the correct data-notification-type attribute for default", () => {
    const defaultProps = {
      id: 1,
      type: "default",
      value: "Default notification",
      markAsRead: () => {},
    };
    const { container } = render(<NotificationItem {...defaultProps} />);
    const li = container.querySelector("li");
    expect(li).toHaveAttribute("data-notification-type", "default");
  });

  test("has the correct data-notification-type attribute for urgent", () => {
    const defaultProps = {
      id: 2,
      type: "urgent",
      value: "Urgent notification",
      markAsRead: () => {},
    };
    const { container } = render(<NotificationItem {...defaultProps} />);
    const li = container.querySelector("li");
    expect(li).toHaveAttribute("data-notification-type", "urgent");
  });
});