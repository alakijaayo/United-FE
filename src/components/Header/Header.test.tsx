import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  test("It renders the Footer", () => {
    render(<Header />);
    const HomeBtn = screen.getByText("Homepage");
    const LeaderBtn = screen.getByText("Leaderboard");
    const Text = screen.getByText("United Quiz");

    expect(HomeBtn).toBeInTheDocument();
    expect(Text).toBeInTheDocument();
    expect(LeaderBtn).toBeInTheDocument();
  });
});
