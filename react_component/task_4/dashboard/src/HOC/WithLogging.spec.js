import { render, screen } from "@testing-library/react";
import withLogging from "./WithLogging";
import { Component } from "react";

class MockApp extends Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

let WrapedComponent = withLogging(MockApp);

test("testing if withLogging wraps the component correctly", () => {
  let { container } = render(<WrapedComponent />);
  console.log(container.innerHTML);
  const heading = screen.getByText("Hello from Mock App Component");
  expect(heading).toBeInTheDocument();
});
