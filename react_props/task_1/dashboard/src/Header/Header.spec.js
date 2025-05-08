import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

describe("Header Component", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("contains the Holberton logo", () => {
    const logo = screen.getByAltText("holberton logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      "src",
      expect.stringContaining("holberton-logo.jpg")
    );
  });

  it("contains an h1 element with the correct text", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("School dashboard");
  });
});
