export const resultQuote = (number: number) => {
  let quote = "A true United Legend";

  if (number <= 5) {
    quote = "Are you a Liverpool fan in disguise?";
  }

  if (number > 6 && number <= 10) {
    quote = "As good as the David Bellion signing";
  }

  if (number > 11 && number <= 15) {
    quote = "A decent United signing";
  }

  if (number > 16 && number <= 20) {
    quote = "A quality United signing";
  }

  return quote;
};
