import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Login from "./Login";

describe("Login Component", () => {
  beforeEach(() => {
    render(<Login />);
  });

  it("includes 2 labels, 2 inputs, and 1 button", () => {
    const labels = screen.getAllByLabelText(/Email|Password/i);
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    expect(labels.length).toBe(2);
    expect(inputs.length).toBe(2);
    expect(button).toBeInTheDocument();
  });

  it("focuses input when clicking associated label (Email)", async () => {
    const user = userEvent.setup();
    const emailLabel = screen.getByLabelText("Email");
    const emailInput = screen.getByLabelText("Email");

    await user.click(emailLabel);

    expect(document.activeElement).toBe(emailInput);
  });
});
