import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

describe("Notifications Component", () => {
  it("renders without crashing", () => {
    render(<Notifications />);
  });

  it("displays the text 'Here is the list of notifications'", () => {
    render(<Notifications />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  it("renders three list items", () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(3);
  });

  it("renders the first notification with data-priority='default'", () => {
    render(<Notifications />);
    const firstItem = screen.getByText(/New course available/i);
    expect(firstItem).toHaveAttribute("data-priority", "default");
  });

  it("renders the second notification with data-priority='urgent'", () => {
    render(<Notifications />);
    const secondItem = screen.getByText(/New resume available/i);
    expect(secondItem).toHaveAttribute("data-priority", "urgent");
  });

  it("renders the latest notification using dangerouslySetInnerHTML", () => {
    render(<Notifications />);
    const htmlContent = screen.getByText(getLatestNotification());
    expect(htmlContent).toBeInTheDocument();
    expect(htmlContent).toHaveStyle("color: red");
  });

  it("calls console.log when the close button is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<Notifications />);
    const closeButton = screen.getByRole("button", { name: /Close/i });
    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");
    consoleSpy.mockRestore(); // Clean up after the spy
  });

  it("has a close button with correct aria-label", () => {
    render(<Notifications />);
    const closeButton = screen.getByRole("button", { name: /Close/i });
    expect(closeButton).toHaveAttribute("aria-label", "Close");
  });
});