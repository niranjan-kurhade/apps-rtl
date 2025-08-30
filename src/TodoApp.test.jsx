import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TodoApp from "./TodoApp";

test("renders input and button", () => {
  render(<TodoApp />);
  expect(screen.getByPlaceholderText(/Enter todo/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Add/i })).toBeInTheDocument();
});

test("adding a todo updates list", async () => {
  render(<TodoApp />);
  const input = screen.getByPlaceholderText(/Enter todo/i);

  await userEvent.type(input, "Learn RTL");
  await userEvent.click(screen.getByRole("button", { name: /Add/i }));

  expect(screen.getByText("Learn RTL")).toBeInTheDocument();
});

test("deleting a todo removes it from list", async () => {
  render(<TodoApp />);
  const input = screen.getByPlaceholderText(/Enter todo/i);

  await userEvent.type(input, "Learn Testing");
  await userEvent.click(screen.getByRole("button", { name: /Add/i }));
  expect(screen.getByText("Learn Testing")).toBeInTheDocument();

  await userEvent.click(screen.getByRole("button", { name: /Delete/i }));
  expect(screen.queryByText("Learn Testing")).not.toBeInTheDocument();
});
