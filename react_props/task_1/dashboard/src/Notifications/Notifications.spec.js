// Notifications.spec.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications Component Tests", () => {
  // Test 1: Check the existence of the notifications title
  it("should display the title 'Here is the list of notifications'", () => {
    render(<Notifications />);
    const title = screen.getByText(/here is the list of notifications/i); // Case-insensitive match
    expect(title).toBeInTheDocument();
  });

  // Test 2: Check the existence of the close button
  it("should display a close button", () => {
    render(<Notifications />);
    const closeButton = screen.getByRole("button", { name: /close/i }); // Matches aria-label="Close"
    expect(closeButton).toBeInTheDocument();
  });

  // Test 3: Verify that there are 3 <li> elements as notifications
  it("should render 3 list items as notifications", () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole("listitem"); // Finds all <li> elements
    expect(listItems.length).toBe(3);
  });

  // Test 4: Check whether clicking the close button logs to the console
  it("should log 'Close button has been clicked' when the close button is clicked", () => {
    // Mock console.log
    const consoleSpy = jest.spyOn(console, "log");

    render(<Notifications />);
    const closeButton = screen.getByRole("button", { name: /close/i });

    // Simulate a click event on the close button
    fireEvent.click(closeButton);

    // Verify the console log message
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");

    // Restore the original console.log
    consoleSpy.mockRestore();
  });
});
