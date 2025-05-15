import React from "react";
import { render, screen } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
  it("calls the markAsRead function when clicked", () => {
    const mockMarkAsRead = jest.fn();
    const props = {
      id: 1,
      type: "default",
      value: "Test notification",
      markAsRead: mockMarkAsRead,
    };

    render(<NotificationItem {...props} />);
    const liElement = screen.getByText("Test notification");

    liElement.click();

    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });

  it("applies the correct color for 'default' type", () => {
    const props = {
      id: 1,
      type: "default",
      value: "Default notification",
      markAsRead: () => {},
    };
    const { container } = render(<NotificationItem {...props} />);
    const li = container.querySelector("li");

    expect(li).toHaveStyle("color: blue");
  });

  it("applies the correct color for 'urgent' type", () => {
    const props = {
      id: 2,
      type: "urgent",
      value: "Urgent notification",
      markAsRead: () => {},
    };
    const { container } = render(<NotificationItem {...props} />);
    const li = container.querySelector("li");

    expect(li).toHaveStyle("color: red");
  });

  it("has the correct data-notification-type attribute for default", () => {
    const props = {
      id: 1,
      type: "default",
      value: "Default notification",
      markAsRead: () => {},
    };
    const { container } = render(<NotificationItem {...props} />);
    const li = container.querySelector("li");

    expect(li).toHaveAttribute("data-notification-type", "default");
  });

  it("has the correct data-notification-type attribute for urgent", () => {
    const props = {
      id: 2,
      type: "urgent",
      value: "Urgent notification",
      markAsRead: () => {},
    };
    const { container } = render(<NotificationItem {...props} />);
    const li = container.querySelector("li");

    expect(li).toHaveAttribute("data-notification-type", "urgent");
  });
});