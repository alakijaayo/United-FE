const inProduction = process.env.NODE_ENV === "production";
const url = inProduction
  ? "http://ec2-18-130-127-69.eu-west-2.compute.amazonaws.com"
  : "http://localhost:8080";

export const getQuestion = () => {
  const variables = `${window.location.pathname}/${process.env.NODE_ENV}`;
  const URL = url + variables;

  const question = fetch(URL).then((response) => response.json());

  return question;
};

export const checkAnswer = (questionNumber: number | null, answer: string) => {
  const URL = url + "/checkAnswer";

  return fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      number: questionNumber,
      userChoice: answer,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
