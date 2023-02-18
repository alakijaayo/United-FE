import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { resetCount, setCount } from "../../api/api";
import Layout from "../../layout";
import { UserContext } from "../../providers/UserProvider";
import { CorrectAnswer, Next, StyledDiv, Text } from "./Answer.style";

function Answer() {
  const isCorrect = window.location.pathname === "/correct";
  const { state, dispatch } = useContext(UserContext);
  const { questionCount, answer, route } = state;
  const history = useNavigate();
  const text = questionCount !== 25 ? "Next Question" : "Results";
  const link = questionCount !== 25 ? route : "/result";

  const handleOnNext = () => {
    return history(link);
  };

  if (questionCount === 0) {
    sessionStorage.length === 2
      ? setCount(
          sessionStorage.getItem("questionCount"),
          sessionStorage.getItem("score")
        ).then((response) => {
          console.log(response);
          dispatch({ type: "resetNumbers", payload: response });
          dispatch({ type: "correctAnswer", payload: response });
          dispatch({ type: "setLink", payload: response });
        })
      : resetCount();
  }

  return (
    <Layout>
      <StyledDiv>
        {isCorrect ? (
          <Text variant="h1">Correct</Text>
        ) : (
          <>
            <Text variant="h1">Incorrect</Text>
            <CorrectAnswer variant="h3">
              The correct answer was {answer}
            </CorrectAnswer>
          </>
        )}
        <Next
          aria-label="onNext"
          variant="contained"
          disableRipple
          onClick={handleOnNext}
        >
          {text}
        </Next>
      </StyledDiv>
    </Layout>
  );
}

export default Answer;
