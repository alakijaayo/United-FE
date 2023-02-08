import { Grid } from "@mui/material";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { Types } from "../../providers/UserProvider/reducer";
import { UserContext } from "../../providers/UserProvider/UserProvider";
import { QuestionText, StyledGrid, Option } from "./Questions.style";

interface QuestionsProps {
  setRoute: Dispatch<SetStateAction<string>>;
}

function Questions({ setRoute }: QuestionsProps) {
  const history = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const { questionCount, question } = state;
  const questionNumber = questionCount + 1;
  const URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "http://ec2-18-130-127-69.eu-west-2.compute.amazonaws.com";

  const checkAnswer = async (answer: string) => {
    if (answer === question.correct) {
      dispatch({ type: Types.AddScore });
      return history("/correct");
    }

    return history("/incorrect");
  };

  useEffect(() => {
    dispatch({ type: Types.AddQuestion });
    const callback =
      URL +
      window.location.pathname +
      "?questionNumber=" +
      questionNumber +
      "&environment=" +
      process.env.NODE_ENV;
    setRoute(window.location.pathname);
    fetch(callback)
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: Types.setQuestion,
          payload: response,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, setRoute]);

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
                text={question.option_a}
                ariaLabel="option A"
                onClick={() => checkAnswer(question.option_a)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                text={question.option_b}
                ariaLabel="option B"
                onClick={() => checkAnswer(question.option_b)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                text={question.option_c}
                ariaLabel="option C"
                onClick={() => checkAnswer(question.option_c)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                text={question.option_d}
                ariaLabel="option D"
                onClick={() => checkAnswer(question.option_d)}
              />
            </Grid>
          </StyledGrid>
        </>
      )}
    </Layout>
  );
}

export default Questions;
