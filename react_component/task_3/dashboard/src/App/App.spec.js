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

  test("displays 'Course list' title above CourseList when isLoggedIn is true", () => {
    render(<App isLoggedIn={true} />);
    const heading = screen.getByRole("heading", { name: /Course list/i });
    expect(heading).toBeInTheDocument();
  });

  test("displays 'Log in to continue' title above Login when isLoggedIn is false", () => {
    render(<App isLoggedIn={false} />);
    const heading = screen.getByRole("heading", { name: /Log in to continue/i });
    expect(heading).toBeInTheDocument();
  });

  test("displays 'News from the School' title and news paragraph by default", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /News from the School/i });
    const paragraph = screen.getByText(/Holberton School News goes here/i);

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});