import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("contains the Notifications component", () => {
    render(<App />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  it("contains the Header component", () => {
    render(<App />);
    expect(screen.getByRole("banner")).toBeInTheDocument(); // header role
  });

  it("contains the Login component", () => {
    render(<App />);
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
  });

  it("contains the Footer component", () => {
    render(<App />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // footer role
  });

  it("renders all components in the correct order", () => {
    const { container } = render(<App />);
    const children = Array.from(container.firstChild.children); // App div has children

    // Order: Header -> Login -> Footer
    expect(children[0].tagName).toBe("HEADER");
    expect(children[1].className).toContain("App-body");
    expect(children[2].tagName).toBe("FOOTER");
  });
});
