import { render, screen } from "@testing-library/react";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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
          isHeader={true}
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
          isHeader={true}
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
/*
test("a test that checks when the isHeader prop is true and the second cell in null, the cell background color is #deb5b545", () => {
    render(<table><thead><CourseListRow isHeader={true} textFirstCell={"hello"} textSecondCell={null}/></thead></table>)
    const cells = screen.getAllByRole("cell")
    expect(window.getComputedStyle(cells[0]).backgroundColor).toBe("rgba(222, 181, 181, 0.271)")
})

test("a test that checks when the isHeader prop is true and the second cell in not null, the cell background color is #deb5b545", () => {
    render(<table><thead><CourseListRow isHeader={true} textFirstCell={"hello"} textSecondCell={"world"}/></thead></table>)
    const cells = screen.getAllByRole("cell")
    expect(window.getComputedStyle(cells[0]).backgroundColor).toBe("rgba(222, 181, 181, 0.271)")
    expect(window.getComputedStyle(cells[1]).backgroundColor).toBe("rgba(222, 181, 181, 0.271)")
})

test("a test that checks when the isHeader prop is false, the cell background color is #f5f5f5ab", () => {
    render(<table><thead><CourseListRow isHeader={false}/></thead></table>)
    const cells = screen.getAllByRole("cell")
    expect(window.getComputedStyle(cells[0]).backgroundColor).toBe("rgba(245, 245, 245, 0.671)")
    expect(window.getComputedStyle(cells[1]).backgroundColor).toBe("rgba(245, 245, 245, 0.671)")
})
*/
