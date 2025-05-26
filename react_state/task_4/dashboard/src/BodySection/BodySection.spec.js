import React from "react";
import { render, screen } from "@testing-library/react";
import BodySection from "./BodySection";

describe("BodySection Component", () => {
  it("renders the heading with the correct title", () => {
    render(
      <BodySection title="test">
        <p>test</p>
      </BodySection>
    );

    const heading = screen.getByRole("heading", { level: 2, name: /test/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders all children passed to it", () => {
    render(
      <BodySection title="test">
        <p>child 1</p>
        <span>child 2</span>
      </BodySection>
    );

    const child1 = screen.getByText("child 1");
    const child2 = screen.getByText("child 2");

    expect(child1).toBeInTheDocument();
    expect(child2).toBeInTheDocument();
  });
});