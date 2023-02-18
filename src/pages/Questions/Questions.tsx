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

  return (
    <Layout>
      {question && (
        <>
          <QuestionText aria-label="question" variant="h3">
            {question.question}
          </QuestionText>
          <StyledGrid container rowSpacing={{ xs: 4, md: 12 }} spacing={2}>
            <Grid item xs={12} md={6}>
              <Option
                aria-label="option A"
                variant="contained"
                disableRipple
                onClick={() => handleOnClick(question.option_a)}
              >
                {question.option_a}
              </Option>
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                aria-label="option B"
                variant="contained"
                disableRipple
                onClick={() => handleOnClick(question.option_b)}
              >
                {question.option_b}
              </Option>
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                aria-label="option C"
                variant="contained"
                disableRipple
                onClick={() => handleOnClick(question.option_c)}
              >
                {question.option_c}
              </Option>
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                aria-label="option D"
                variant="contained"
                disableRipple
                onClick={() => handleOnClick(question.option_d)}
              >
                {question.option_d}
              </Option>
            </Grid>
          </StyledGrid>
        </>
      )}
    </Layout>
  );
}

export default Questions;
