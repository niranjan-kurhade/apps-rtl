import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders main heading", () => {
  render(<App />);
  expect(screen.getByText(/React Testing Library Demo/i)).toBeInTheDocument();
});

test("renders CounterApp", () => {
  render(<App />);
  expect(screen.getByText(/Counter App/i)).toBeInTheDocument();
});

test("renders LoginForm", () => {
  render(<App />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

test("renders TodoApp", () => {
  render(<App />);
  expect(screen.getByText(/Todo App/i)).toBeInTheDocument();
});
