import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CounterApp from "./CounterApp";

test("renders heading", () => {
  render(<CounterApp />);
  expect(screen.getByText(/Counter App/i)).toBeInTheDocument();
});

test("initial count is 0", () => {
  render(<CounterApp />);
  expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
});

test("increments count", () => {
  render(<CounterApp />);
  fireEvent.click(screen.getByText(/Increment/i));
  expect(screen.getByTestId("count")).toHaveTextContent("Count: 1");
});

test("decrements count", () => {
  render(<CounterApp />);
  fireEvent.click(screen.getByText(/Decrement/i));
  expect(screen.getByTestId("count")).toHaveTextContent("Count: -1");
});
