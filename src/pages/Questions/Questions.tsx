import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Layout from "../../layout";
import Question from "../../models/Question/";
import { levelInfo } from "../../utils/levelInfo/levelInfo";
import { QuestionText, StyledGrid, Option, Wrapper } from "./Questions.style";

function Questions() {
  const query = levelInfo(window.location.href);
  console.log(query);

  const [question, setQuestion] = useState<Question>({
    number: null,
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    correct: "",
  });

  useEffect(() => {
    const url = "http://localhost:8080/" + query;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        setQuestion({
          number: response.number,
          question: response.question,
          option_a: response.option_a,
          option_b: response.option_b,
          option_c: response.option_c,
          option_d: response.option_d,
          correct: response.correct,
        });
      });
  }, [query]);

  return (
    <Layout>
      <Wrapper>
        <QuestionText variant="h3">{question.question}</QuestionText>
        <StyledGrid container rowSpacing={{ xs: 4, md: 12 }} spacing={2}>
          <Grid item xs={12} md={6}>
            <Option text={question.option_a} link="/" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Option text={question.option_b} link="/" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Option text={question.option_c} link="/" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Option text={question.option_d} link="/" />
          </Grid>
        </StyledGrid>
      </Wrapper>
    </Layout>
  );
}

export default Questions;
