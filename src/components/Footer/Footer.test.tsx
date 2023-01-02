import { screen } from "@testing-library/react";
import { renderWithPageProviders } from "../../helpers/testing";
import Footer from "./Footer";

describe("Footer", () => {
  test("It renders the Footer", () => {
    renderWithPageProviders(<Footer />);
    const question = screen.getByText("Question: 0/25");
    const score = screen.getByText("Score: 0/25");

    expect(question).toBeInTheDocument();
    expect(score).toBeInTheDocument();
  });
});
