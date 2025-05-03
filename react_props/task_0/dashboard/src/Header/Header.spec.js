import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

describe("Header Component", () => {
  it("renders without crashing", () => {
    render(<Header />);
  });

  it("renders the logo with correct alt text", () => {
    render(<Header />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("holberton-logo.jpg"));
  });

  it("renders the heading 'School dashboard'", () => {
    render(<Header />);
    expect(screen.getByRole("heading", { name: /School dashboard/i })).toBeInTheDocument();
  });

  it("has the correct class name for the header", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toHaveClass("App-header");
  });
});
