import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";

test("renders form correctly", () => {
  render(<LoginForm />);
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
});

test("typing works in inputs", async () => {
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const passwordInput = screen.getByPlaceholderText(/Password/i);

  await userEvent.type(emailInput, "test@example.com");
  await userEvent.type(passwordInput, "123456");

  expect(emailInput).toHaveValue("test@example.com");
  expect(passwordInput).toHaveValue("123456");
});

test("submitting shows welcome message", async () => {
  render(<LoginForm />);
  await userEvent.type(screen.getByPlaceholderText(/Email/i), "john@example.com");
  await userEvent.type(screen.getByPlaceholderText(/Password/i), "1234");
  await userEvent.click(screen.getByRole("button", { name: /login/i }));

  expect(screen.getByText("Welcome, john@example.com")).toBeInTheDocument();
});
