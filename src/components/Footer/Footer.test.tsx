import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("It renders the Footer", () => {
    render(<Footer />);
    const question = screen.getByText("Question: 0/25");
    const name = screen.getByText("Name:");
    const score = screen.getByText("Score: 0/25");

    expect(question).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(score).toBeInTheDocument();
  });
});
