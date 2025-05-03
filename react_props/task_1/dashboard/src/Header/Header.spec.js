import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

describe("Header Component", () => {
  it("renders without crashing", () => {
    render(<Header />);
  });

  it("contains the Holberton logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("holberton-logo.jpg"));
  });

  it("contains an h1 element with the correct text", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("School dashboard");
  });
});