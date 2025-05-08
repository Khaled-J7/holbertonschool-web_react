import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer from "./Footer";
import { getCurrentYear, getFooterCopy } from "../utils/utils";

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders the correct copyright text when isIndex is true", () => {
    const expectedText = `Copyright ${getCurrentYear()} - ${getFooterCopy(
      true
    )}`;

    const paragraph = screen.getByText((content) =>
      content.includes(expectedText)
    );

    expect(paragraph).toBeInTheDocument();
  });
});
