import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { checkAnswer, getQuestion, resetCount, setCount } from "../../api/api";
import Layout from "../../layout";
import Question from "../../models/Question";
import { UserContext } from "../../providers/UserProvider";
import { QuestionText, StyledGrid, Option } from "./Questions.style";
import { useNavigate } from "react-router-dom";

function Questions() {
  const history = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const { questionCount } = state;
  const [question, setQuestion] = useState<Question>({
    number: null,
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
  });

  if (questionCount === 0) {
    sessionStorage.length === 2
      ? setCount(
          sessionStorage.getItem("questionCount"),
          sessionStorage.getItem("score")
        ).then((response) => {
          dispatch({ type: "resetNumbers", payload: response });
        })
      : resetCount();
  }

  useEffect(() => {
    getQuestion().then((response) => {
      dispatch({
        type: "setLink",
        payload: { link: window.location.pathname },
      });
      dispatch({ type: "incrementQuestion", payload: response });
      setQuestion({
        number: response.number,
        question: response.question,
        option_a: response.option_a,
        option_b: response.option_b,
        option_c: response.option_c,
        option_d: response.option_d,
      });
      sessionStorage.setItem("questionCount", response.questionCount);
    });
  }, [dispatch]);

  const handleOnClick = (option: string) => {
    checkAnswer(question.number, option).then((response) => {
      if (response.url === "/correct") {
        dispatch({ type: "incrementScore", payload: response });
      } else {
        dispatch({ type: "correctAnswer", payload: response });
      }
      sessionStorage.setItem("score", response.score);
      history(response.url);
    });
  };

  const {
    question: nextQuestion,
    option_a,
    option_b,
    option_c,
    option_d,
  } = question;

  const answer = [option_a, option_b, option_c, option_d];

  return (
    <Layout>
      {question && (
        <>
          <QuestionText aria-label="question" variant="h3">
            {nextQuestion}
          </QuestionText>
          <StyledGrid container rowSpacing={{ xs: 4, md: 12 }} spacing={2}>
            {answer.map((answers) => (
              <Grid item xs={12} md={6}>
                <Option
                  aria-label="option A"
                  variant="contained"
                  disableRipple
                  onClick={() => handleOnClick(answers)}
                >
                  {answers}
                </Option>
              </Grid>
            ))}
          </StyledGrid>
        </>
      )}
    </Layout>
  );
}

export default Questions;
