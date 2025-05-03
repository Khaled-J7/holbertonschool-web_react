import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("displays the copyright text with current year and string", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`Copyright ${currentYear} - holberton.school`)).toBeInTheDocument();
  });

  it("has the correct class name for the footer", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toHaveClass("App-footer");
  });

  it("uses the correct semantic tag", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild.tagName).toBe("FOOTER");
  });
});
