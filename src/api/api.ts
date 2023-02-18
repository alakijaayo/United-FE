const inProduction = process.env.NODE_ENV === "production";
const url = inProduction
  ? "http://ec2-18-130-127-69.eu-west-2.compute.amazonaws.com"
  : "http://localhost:8080";

export const getQuestion = async () => {
  const variables = `${window.location.pathname}/${process.env.NODE_ENV}`;
  const URL = url + variables;

  const response = await fetch(URL);
  return await response.json();
};

export const checkAnswer = async (
  questionNumber: number | null,
  answer: string
) => {
  const URL = url + "/checkAnswer";

  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      number: questionNumber,
      userChoice: answer,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const resetCount = async () => {
  const URL = url + "/clear";

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const setCount = async (
  questionCount: string | null,
  score: string | null
) => {
  const variables = `/setScore/${questionCount}/${score}${window.location.pathname}`;
  console.log(variables);

  const URL = url + variables;

  const response = await fetch(URL);
  return await response.json();
};
