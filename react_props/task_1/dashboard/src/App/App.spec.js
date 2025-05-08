import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("contains the Notifications component", () => {
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  it("contains the Header component", () => {
    expect(screen.getByRole("banner")).toBeInTheDocument(); // <header role="banner">
  });

  it("contains the Login component", () => {
    expect(
      screen.getByText(/Login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  it("contains the Footer component", () => {
    expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // <footer role="contentinfo">
  });
});
