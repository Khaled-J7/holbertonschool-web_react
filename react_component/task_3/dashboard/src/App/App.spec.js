import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("checking if the alert is called with the right string", async () => {
  render(<App isLoggedIn={true} logOut={() => {}}></App>);
  const user = userEvent.setup();
  const mockedAlert = jest.spyOn(window, "alert").mockImplementation(() => {});
  await user.keyboard("{Control>}{h}{/Control}");
  expect(mockedAlert).toHaveBeenCalledWith("Logging you out");
  jest.clearAllMocks();
});

test("checking if the logOut prop is called", async () => {
  const mockFunction = jest.fn();
  render(<App isLoggedIn={true} logOut={mockFunction} />);
  const user = userEvent.setup();
  await user.keyboard("{Control>}{h}{/Control}");
  expect(mockFunction).toHaveBeenCalled();
});

test("checking if the Course list title is displayed", () => {
  render(<App isLoggedIn={true} logOut={() => {}}></App>);
  const title = screen.getByText(/Course list/i);
  expect(title).toBeInTheDocument();
});

test("checking if the Log in title is displayed", () => {
  render(<App isLoggedIn={false} logOut={() => {}}></App>);
  const title = screen.getByText(/Log in to continue/i);
  expect(title).toBeInTheDocument();
});
