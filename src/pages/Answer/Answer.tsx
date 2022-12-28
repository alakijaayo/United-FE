import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { UserContext } from "../../providers/UserProvider";
import { LevelInfo } from "../../utils/LevelInfo";
import { CorrectAnswer, Next, StyledDiv, Text } from "./Answer.style";

interface AnswerProps {
  route: string;
}

function Answer({ route }: AnswerProps) {
  const query = LevelInfo(window.location.href);
  const isCorrect = query === "/correct";
  const { state } = useContext(UserContext);
  const { questionCount, question } = state;
  const { correct } = question;
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
              The correct answer was {correct}
            </CorrectAnswer>
          </>
        )}
        <Next text={text} onClick={handleOnNext} />
      </StyledDiv>
    </Layout>
  );
}

export default Answer;
