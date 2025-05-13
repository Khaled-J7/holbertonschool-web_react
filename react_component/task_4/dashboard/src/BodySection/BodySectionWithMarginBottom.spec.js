import React from "react";
import { render, screen } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("BodySectionWithMarginBottom Component", () => {
  it("contains a div with class bodySectionWithMargin", () => {
    render(
      <BodySectionWithMarginBottom title="test">
        <p>test content</p>
      </BodySectionWithMarginBottom>
    );

    const container = screen.getByTestId("bodySectionWithMargin");
    expect(container).toBeInTheDocument();
  });

  it("renders the BodySection component", () => {
    render(
      <BodySectionWithMarginBottom title="test">
        <p>test content</p>
      </BodySectionWithMarginBottom>
    );

    const heading = screen.getByRole("heading", { level: 2, name: /test/i });
    const paragraph = screen.getByText("test content");

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});