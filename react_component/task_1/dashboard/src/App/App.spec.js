import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("App Component", () => {
  it("calls logOut and shows alert when Ctrl+H is pressed", () => {
    const mockLogOut = jest.fn();
    const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<App logOut={mockLogOut} />);
    fireEvent.keyDown(window, { key: "h", ctrlKey: true });

    expect(mockAlert).toHaveBeenCalledWith("Logging you out");
    expect(mockLogOut).toHaveBeenCalled();

    mockAlert.mockRestore();
  });

  it("does not call logOut on other key combinations", () => {
    const mockLogOut = jest.fn();
    const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<App logOut={mockLogOut} />);
    fireEvent.keyDown(window, { key: "a", ctrlKey: true });

    expect(mockAlert).not.toHaveBeenCalled();
    expect(mockLogOut).not.toHaveBeenCalled();

    mockAlert.mockRestore();
  });
});