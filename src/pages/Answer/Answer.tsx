import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { UserContext } from "../../providers/UserProvider";
import { levelInfo } from "../../utils/levelInfo";
import { Next, StyledDiv, Text } from "./Answer.style";

interface AnswerProps {
  route: string;
}

function Answer({ route }: AnswerProps) {
  const query = levelInfo(window.location.href);
  const { state } = useContext(UserContext);
  const { questionCount } = state;
  const history = useNavigate();
  const text = questionCount !== 25 ? "Next Question" : "Results";
  const link = questionCount !== 25 ? route : "/result";

  const addScore = () => {
    return history(link);
  };

  return (
    <Layout>
      <StyledDiv>
        {query === "/correct" ? (
          <Text variant="h1">Correct</Text>
        ) : (
          <Text variant="h1">Incorrect</Text>
        )}
        <Next text={text} onClick={() => addScore()} />
      </StyledDiv>
    </Layout>
  );
}

export default Answer;
