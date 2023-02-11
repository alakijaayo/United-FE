import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getAnswers } from "../../api/api";
import Layout from "../../layout";
import Question from "../../models/Question";
import { QuestionText, StyledGrid, Option } from "./Questions.style";

function Questions() {
  const [question, setQuestion] = useState<Question>({
    number: null,
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
  });

  useEffect(() => {
    getAnswers(1).then((response) => {
      setQuestion({
        number: response.number,
        question: response.question,
        option_a: response.option_a,
        option_b: response.option_b,
        option_c: response.option_c,
        option_d: response.option_d,
      });
    });
  }, []);

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
                // onClick={() => checkAnswer(question.option_a)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                text={question.option_b}
                ariaLabel="option B"
                // onClick={() => checkAnswer(question.option_b)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                text={question.option_c}
                ariaLabel="option C"
                // onClick={() => checkAnswer(question.option_c)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Option
                text={question.option_d}
                ariaLabel="option D"
                // onClick={() => checkAnswer(question.option_d)}
              />
            </Grid>
          </StyledGrid>
        </>
      )}
    </Layout>
  );
}

export default Questions;
