import { render } from "@testing-library/react";
import NotificationItem from "./NotificationItem.jsx";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("checking if the lists have the right color when the type is default", () => {
  let mockedFunc = jest.fn().mockImplementation(() => {});
  render(
    <NotificationItem
      type={"default"}
      html={undefined}
      value={"testing"}
      fn={mockedFunc}
    ></NotificationItem>
  );
  const text = screen.getByText("testing");
  expect(text).toBeInTheDocument();
  jest.clearAllMocks();
});
test("checking if the lists have the right color when the type is urgent", () => {
  let mockedFunc = jest.fn().mockImplementation(() => {});
  render(
    <NotificationItem
      type={"urgent"}
      html={undefined}
      value={"testing"}
      fn={mockedFunc}
    ></NotificationItem>
  );
  const text = screen.getByText("testing");
  expect(text).toBeInTheDocument();
  jest.clearAllMocks();
});

test("if the message Notification {id} has been marked as read is logged", async () => {
  const logMock = jest.spyOn(console, "log").mockImplementation(() => {});
  const mockedFunc = jest.fn().mockImplementation(() => {
    console.log(`Notification 123 has been marked as read`);
  });
  render(
    <NotificationItem
      key={123}
      type={"default"}
      value={"New resume available"}
      fn={mockedFunc}
    />
  );
  const userE = userEvent.setup();
  await userE.click(screen.getByRole("listitem"));
  expect(logMock).toBeCalledWith(`Notification 123 has been marked as read`);
  jest.clearAllMocks();
});
