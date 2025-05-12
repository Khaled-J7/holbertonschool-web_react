import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  test("checking if the alert is called with the right string", async () => {
    const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<App isLoggedIn={true} logOut={() => {}} />);
    const user = userEvent.setup();

    await user.keyboard("{Control>}{h}{/Control}");
    expect(mockAlert).toHaveBeenCalledWith("Logging you out");

    mockAlert.mockRestore();
  });

  test("checking if the logOut prop is called", async () => {
    const mockFunction = jest.fn();
    render(<App isLoggedIn={true} logOut={mockFunction} />);
    const user = userEvent.setup();

    await user.keyboard("{Control>}{h}{/Control}");
    expect(mockFunction).toHaveBeenCalled();
  });
});