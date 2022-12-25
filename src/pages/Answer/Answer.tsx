import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { UserContext } from "../../providers/UserProvider";
import { LevelInfo } from "../../utils/LevelInfo";
import { Next, Text } from "./Answer.style";

interface AnswerProps {
  route: string;
}

function Answer({ route }: AnswerProps) {
  const query = LevelInfo(window.location.href);
  const isCorrect = query === "/correct";
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
      {isCorrect ? (
        <Text variant="h1">Correct</Text>
      ) : (
        <Text variant="h1">Incorrect</Text>
      )}
      <Next text={text} onClick={() => addScore()} />
    </Layout>
  );
}

export default Answer;
