import { screen } from "@testing-library/react";
import { renderWithPageProviders } from "../../helpers/testing";
import Homepage from "./HomePage";

describe("Homepage", () => {
  test("renders the homepage", () => {
    renderWithPageProviders(<Homepage levels={["easy"]} />);
    const title = screen.getByText("United Quiz");
    const welcome = screen.getByText("Welcome to the Manchester United Quiz");
    const difficulty = screen.getByText("Please choose your difficulty:");

    expect(title).toBeInTheDocument();
    expect(welcome).toBeInTheDocument();
    expect(difficulty).toBeInTheDocument();
  });
});
