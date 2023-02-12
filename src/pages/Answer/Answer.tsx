import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { UserContext } from "../../providers/UserProvider";
import { Types } from "../../providers/UserProvider/reducer";
import { CorrectAnswer, Next, StyledDiv, Text } from "./Answer.style";

interface AnswerProps {
  route: string;
}

function Answer({ route }: AnswerProps) {
  const isCorrect = window.location.pathname === "/correct";
  const { state, dispatch } = useContext(UserContext);
  const { questionCount } = state;
  const history = useNavigate();
  const text = questionCount !== 25 ? "Next Question" : "Results";
  const link = questionCount !== 25 ? route : "/result";

  const handleOnNext = () => {
    if (isCorrect) {
      dispatch({ type: Types.AddScore });
    }

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
              {/* The correct answer was {correct} */}
            </CorrectAnswer>
          </>
        )}
        <Next ariaLabel="onNext" text={text} onClick={handleOnNext} />
      </StyledDiv>
    </Layout>
  );
}

export default Answer;
