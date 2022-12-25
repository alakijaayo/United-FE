import { Grid } from "@mui/material";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { Types } from "../../providers/UserProvider/reducer";
import { UserContext } from "../../providers/UserProvider/UserProvder";
import { levelInfo } from "../../utils/levelInfo";
import { QuestionText, StyledGrid, Option, Wrapper } from "./Questions.style";

interface QuestionsProps {
  setRoute: Dispatch<SetStateAction<string>>;
}

function Questions({ setRoute }: QuestionsProps) {
  const query = levelInfo(window.location.href);
  const history = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const { question } = state;

  const checkAnswer = async (answer: string) => {
    if (answer === question.correct) {
      dispatch({ type: Types.AddScore });
      return history("/correct");
    }

    return history("/incorrect");
  };

  useEffect(() => {
    dispatch({ type: Types.AddQuestion });
    setRoute(query);
    const url = "http://localhost:8080" + query;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: Types.setQuestion,
          payload: response,
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
