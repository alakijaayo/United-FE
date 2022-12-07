import { render, screen } from "@testing-library/react";
import Homepage from "./HomePage";

test("renders the App", () => {
  render(<Homepage />);
  const title = screen.getByText("United Quiz");
  const welcome = screen.getByText("Welcome to the Manchester United Quiz");
  const prompt = screen.getByText(/Please Insert your Name/i);
  const nameInput = screen.getByPlaceholderText(/Insert Name Here/i);

  expect(title).toBeInTheDocument();
  expect(welcome).toBeInTheDocument();
  expect(prompt).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
});
