import { screen } from "@testing-library/react";
import { renderWithPageProviders } from "../../helpers/testing";
import Homepage from "./HomePage";

test("renders the App", () => {
  renderWithPageProviders(<Homepage />);
  const title = screen.getByText("United Quiz");
  const welcome = screen.getByText("Welcome to the Manchester United Quiz");
  const difficulty = screen.getByText("Please choose your difficulty:");

  expect(title).toBeInTheDocument();
  expect(welcome).toBeInTheDocument();
  expect(difficulty).toBeInTheDocument();
});
