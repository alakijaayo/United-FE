import { render, screen } from "@testing-library/react";
import LevelsButton from "./Button";

describe("LevelsButton", () => {
  test("it renders the LevelsButton", () => {
    render(<LevelsButton text="Medium" link="medium" />);
    const Btn = screen.getByText("Medium");
    expect(Btn).toBeInTheDocument();
  });
});
