export const getAnswers = (questionNumber: number) => {
  const inProduction = process.env.NODE_ENV === "production";
  const variables = `${window.location.pathname}/${questionNumber}/${process.env.NODE_ENV}`;
  const URL = inProduction
    ? "http://ec2-18-130-127-69.eu-west-2.compute.amazonaws.com" + variables
    : "http://localhost:8080" + variables;

  const question = fetch(URL).then((response) => response.json());

  return question;
};
