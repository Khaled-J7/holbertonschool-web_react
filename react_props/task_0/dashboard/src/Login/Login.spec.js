import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Login from "./Login";

describe("Login Component", () => {
  it("renders without crashing", () => {
    render(<Login />);
  });

  it("displays the login message", () => {
    render(<Login />);
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
  });

  it("contains two input fields and a button", () => {
    render(<Login />);
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button", { name: /OK/i });

    expect(inputs.length).toBe(2);
    expect(button).toBeInTheDocument();
  });

  it("labels are associated with inputs (basic check)", () => {
    render(<Login />);
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
  });

  it("has the correct class for the body container", () => {
    const { container } = render(<Login />);
    expect(container.firstChild).toHaveClass("App-body");
  });
});
