import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { checkAnswer, getQuestion } from "../../api/api";
import Layout from "../../layout";
import Question from "../../models/Question";
import { UserContext } from "../../providers/UserProvider";
import { QuestionText, StyledGrid, Option } from "./Questions.style";
import { useNavigate } from "react-router-dom";
import { Types } from "../../providers/UserProvider/reducer";

function Questions() {
  const history = useNavigate();
  const { dispatch } = useContext(UserContext);
  const [question, setQuestion] = useState<Question>({
    number: null,
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
  });

  useEffect(() => {
    dispatch({ type: Types.AddQuestion });
    getQuestion().then((response) => {
      setQuestion({
        number: response.number,
        question: response.question,
        option_a: response.option_a,
        option_b: response.option_b,
        option_c: response.option_c,
        option_d: response.option_d,
      });
    });
  }, [dispatch]);

  const handleOnClick = (option: string) => {
    checkAnswer(question.number, option).then((response) =>
      history(response.url)
    );
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
                text={question.option_a}
                ariaLabel="option A"
                onClick={() => handleOnClick(question.option_a)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                text={question.option_b}
                ariaLabel="option B"
                onClick={() => handleOnClick(question.option_b)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                text={question.option_c}
                ariaLabel="option C"
                onClick={() => handleOnClick(question.option_c)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                text={question.option_d}
                ariaLabel="option D"
                onClick={() => handleOnClick(question.option_d)}
              />
            </Grid>
          </StyledGrid>
        </>
      )}
    </Layout>
  );
}

export default Questions;
