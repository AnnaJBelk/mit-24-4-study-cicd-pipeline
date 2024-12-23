import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// Import jest-dom to enable the toHaveTextContent matcher
import "@testing-library/jest-dom";

test("renders Vite + React text", () => {
  render(<App />);
  const headerElement = screen.getByText(/Vite \+ React/i);
  expect(headerElement).toBeInTheDocument(); // Use toBeInTheDocument() from jest-dom
});

test("increments count when button is clicked", () => {
  render(<App />);
  const button = screen.getByText(/count is 0/i); // Finds button text that says "count is 0"
  fireEvent.click(button); // Simulate a button click
  expect(button).toHaveTextContent("count is 1"); // Ensure the text changes to "count is 1"
});
