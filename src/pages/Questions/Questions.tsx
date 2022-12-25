import { Grid } from "@mui/material";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import Question from "../../models/Question";
import { UserContext } from "../../providers/UserProvider/UserProvder";
import { levelInfo } from "../../utils/levelInfo";
import { QuestionText, StyledGrid, Option, Wrapper } from "./Questions.style";

interface QuestionsProps {
  setRoute: Dispatch<SetStateAction<string>>;
}

function Questions({ setRoute }: QuestionsProps) {
  const query = levelInfo(window.location.href);
  const history = useNavigate();
  const { dispatch } = useContext(UserContext);

  const [question, setQuestion] = useState<Question>({
    number: null,
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    correct: "",
  });

  const checkAnswer = async (answer: string) => {
    return answer === question.correct
      ? history("/correct")
      : history("/incorrect");
  };

  useEffect(() => {
    dispatch({ type: "incrementQuestion" });
    setRoute(query);
    const url = "http://localhost:8080" + query;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
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
  }, [query, dispatch, setRoute]);

  return (
    <Layout>
      <Wrapper>
        <QuestionText variant="h3">{question.question}</QuestionText>
        <StyledGrid container rowSpacing={{ xs: 4, md: 12 }} spacing={2}>
          <Grid item xs={12} md={6}>
            <Option
              text={question.option_a}
              onClick={() => checkAnswer(question.option_a)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Option
              text={question.option_b}
              onClick={() => checkAnswer(question.option_b)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Option
              text={question.option_c}
              onClick={() => checkAnswer(question.option_c)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Option
              text={question.option_d}
              onClick={() => checkAnswer(question.option_d)}
            />
          </Grid>
        </StyledGrid>
      </Wrapper>
    </Layout>
  );
}

export default Questions;
