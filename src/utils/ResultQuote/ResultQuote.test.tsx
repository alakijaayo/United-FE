import { resultQuote } from "./ResultQuote";

describe("Result Quote", () => {
  describe("When the user finishes the game", () => {
    test("It lets user know they have done poorly", () => {
      const result = resultQuote(4);
      expect(result).toEqual("Are you a Liverpool fan in disguise?");
    });

    test("It lets user know they have done badly", () => {
      const result = resultQuote(9);
      expect(result).toEqual("As good as the David Bellion signing");
    });

    test("It lets user know they have done okay", () => {
      const result = resultQuote(13);
      expect(result).toEqual("A decent United signing");
    });

    test("It lets user know they have done well", () => {
      const result = resultQuote(18);
      expect(result).toEqual("A quality United signing");
    });

    test("It lets user know they have done great", () => {
      const result = resultQuote(23);
      expect(result).toEqual("A true United Legend");
    });
  });
});
