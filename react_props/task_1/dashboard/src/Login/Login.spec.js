import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Login from "./Login";

describe("Login Component", () => {
  it("renders without crashing", () => {
    render(<Login />);
  });

  it("includes 2 labels, 2 inputs, and 1 button", () => {
    render(<Login />);
    const labels = screen.getAllByRole("label");
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button", { name: /OK/i });

    expect(labels.length).toBe(2);
    expect(inputs.length).toBe(2);
    expect(button).toBeInTheDocument();
  });

  it("focuses input when clicking associated label", () => {
    render(<Login />);
    const emailLabel = screen.getByLabelText(/Email:/i);
    const emailInput = screen.getByLabelText(/Email:/i);

    fireEvent.click(emailLabel);
    expect(document.activeElement).toBe(emailInput);
  });
});