import { render, screen } from "@testing-library/react";
import Login from "./Login.jsx";
import userEvent from "@testing-library/user-event";

describe("Login component", () => {
  it("are the input elements renderd", () => {
    render(<Login />);
    const allInputs = screen.getAllByRole("textbox");
    expect(allInputs.length).toBe(2);
  });
  it("are the labels rendred", () => {
    render(<Login />);
    const label1 = screen.getByLabelText("Email");
    expect(label1).toBeInTheDocument();
    const label2 = screen.getByLabelText("Password");
    expect(label2).toBeInTheDocument();
  });
  it("is the button rendred", () => {
    render(<Login />);
    const btn = screen.getByTestId("btn");
    expect(btn).toBeInTheDocument();
    expect(btn.textContent).toMatch(/OK/);
  });
  it("checking if the input is focused if a label is clicked", async () => {
    render(<Login />);
    const userE = userEvent.setup();
    const inp = screen.getByTestId("pw");
    await userE.click(screen.getByLabelText("Password"));
    expect(inp).toBe(document.activeElement);
  });
});
