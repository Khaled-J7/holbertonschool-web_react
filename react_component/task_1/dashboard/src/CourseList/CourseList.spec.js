import { render, screen } from "@testing-library/react";
import CourseList from "./CourseList";

test("testing with 5 elements in array", () => {
  render(
    <CourseList
      courses={[
        { id: 123, name: "html", credit: 50 },
        { id: 13, name: "scratch", credit: 40 },
        { id: 445, name: "oracle", credit: 30 },
        { id: 555, name: "js", credit: 20 },
        { id: 88, name: "css", credit: 10 },
      ]}
    />
  );
  const theRows = screen.getAllByRole("row");
  expect(theRows.length).toBe(7);
});

test("testing with empty array", () => {
  render(<CourseList courses={[]} />);
  const theRow = screen.getByRole("row");
  expect(theRow).toBeInTheDocument();
});
