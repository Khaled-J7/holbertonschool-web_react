import { render, screen } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

test("checking if the correct element in rendred when is header is true and textSecondCell is null", () => {
  render(
    <table>
      <thead>
        <CourseListRow
          isHeader={true}
          textFirstCell={"hello"}
          textSecondCell={null}
        />
      </thead>
    </table>
  );
  const theCell = screen.getByRole("cell");
  expect(theCell).toBeInTheDocument();
});

test("checking if the correct element in rendred when is header is true and textSecondCell is not null", () => {
  render(
    <table>
      <thead>
        <CourseListRow
          header={true}
          textFirstCell={"hello"}
          textSecondCell={"world"}
        />
      </thead>
    </table>
  );
  const theCells = screen.getAllByRole("cell");
  expect(theCells.length).toBe(2);
});

test("checking if the correct element in rendred when is header is false", () => {
  render(
    <table>
      <thead>
        <CourseListRow
          header={true}
          textFirstCell={"hello"}
          textSecondCell={"world"}
        />
      </thead>
    </table>
  );
  const theCells = screen.getAllByRole("cell");
  const theRow = screen.getByRole("row");
  expect(theCells.length).toBe(2);
  expect(theRow.contains(theCells[0])).toBe(true);
  expect(theRow.contains(theCells[1])).toBe(true);
});
