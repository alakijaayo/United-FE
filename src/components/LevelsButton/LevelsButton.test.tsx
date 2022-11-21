import { render, screen } from "@testing-library/react";
import LevelsButton from "./LevelsButton";

describe("LevelsButton", () => {
  test("it renders the LevelsButton", () => {
    render(<LevelsButton level="Medium" />);
    const Btn = screen.getByText("Medium");
    expect(Btn).toBeInTheDocument();
  });
});
