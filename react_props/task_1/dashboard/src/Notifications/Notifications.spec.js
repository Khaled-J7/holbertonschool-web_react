import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

describe("Notifications Component", () => {
  beforeEach(() => {
    render(<Notifications />);
  });

  it("displays the notification title", () => {
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  it("renders three list items", () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(3);
  });

  it("renders the first notification with data-priority='default'", () => {
    const item = screen.getByText(/New course available/i);
    expect(item).toHaveAttribute("data-priority", "default");
  });

  it("renders the second notification with data-priority='urgent'", () => {
    const item = screen.getByText(/New resume available/i);
    expect(item).toHaveAttribute("data-priority", "urgent");
  });

  it("renders the latest notification using dangerouslySetInnerHTML", () => {
    const container = screen.getByText((content, node) => {
      return node?.innerHTML === getLatestNotification();
    });

    expect(container).toBeInTheDocument();
  });

  it("logs message when close button is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const closeButton = screen.getByRole("button", { name: "Close" });
    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");
    consoleSpy.mockRestore();
  });
});