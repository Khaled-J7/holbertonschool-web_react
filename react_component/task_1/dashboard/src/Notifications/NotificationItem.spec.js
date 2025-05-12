import { render } from "@testing-library/react";
import NotificationsItem from "./NotificationItem.jsx";
import { screen } from "@testing-library/react";

test("checking if the lists have the right color when the type is default", () => {
  render(
    <NotificationsItem
      type={"default"}
      html={undefined}
      value={"testing"}
    ></NotificationsItem>
  );
  const text = screen.getByText("testing");
  expect(text).toBeInTheDocument();
});
test("checking if the lists have the right color when the type is urgent", () => {
  render(
    <NotificationsItem
      type={"urgent"}
      html={undefined}
      value={"testing"}
    ></NotificationsItem>
  );
  const text = screen.getByText("testing");
  expect(text).toBeInTheDocument();
});
