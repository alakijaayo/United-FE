import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { UserContext } from "../../providers/UserProvider";
import { CorrectAnswer, Next, StyledDiv, Text } from "./Answer.style";

interface AnswerProps {
  route: string;
}

function Answer({ route }: AnswerProps) {
  const isCorrect = window.location.pathname === "/correct";
  const { state } = useContext(UserContext);
  const { questionCount, answer } = state;
  const history = useNavigate();
  const text = questionCount !== 25 ? "Next Question" : "Results";
  const link = questionCount !== 25 ? route : "/result";

  const handleOnNext = () => {
    return history(link);
  };

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
