import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer Component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("renders the correct copyright string when isIndex is true", () => {
    render(<Footer />);
    const expectedText = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;
    const paragraph = screen.getByText(expectedText);
    expect(paragraph).toBeInTheDocument();
  });
});