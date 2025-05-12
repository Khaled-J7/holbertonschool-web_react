import Notifications from "./Notifications.jsx";
import { render, screen } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";
import { getLatestNotification } from "../utils/utils.js";

test("if the displayDrawler is false", () => {
  render(<Notifications notifications={[]} displayDrawer={false} />);
  const p = screen.getByRole("paragraph");
  expect(p).toBeInTheDocument();
  const btn = screen.queryByRole("button");
  expect(btn).toBeNull();
});

test("if the displayDrawler is true and the list is not empty", () => {
  render(
    <Notifications
      notifications={[
        { id: uuidv4(), type: "default", value: "New course available" },
        { id: uuidv4(), type: "urgent", value: "New resume available" },
        { id: uuidv4(), type: "urgent", HTML: getLatestNotification() },
      ]}
      displayDrawer={true}
    />
  );
  const p = screen.getAllByRole("paragraph");
  expect(p.length).toBe(2);
  const btn = screen.queryByRole("button");
  expect(btn).toBeInTheDocument();
  const li = screen.getAllByRole("listitem");
  expect(li.length).toBe(3);
  // equal to the list length
});

test("if the displayDrawler is true and the list is empty", () => {
  render(<Notifications notifications={[]} displayDrawer={true} />);
  const text = screen.getByText("No new notification for now");
  expect(text).toBeInTheDocument();
});
