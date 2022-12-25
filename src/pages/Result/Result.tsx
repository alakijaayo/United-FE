import { useContext, ChangeEvent } from "react";
import Layout from "../../layout/Layout";
import { UserContext } from "../../providers/UserProvider";
import { Types } from "../../providers/UserProvider/reducer";
import { resultQuote } from "../../utils/ResultQuote";
import { Text, UserName } from "./Result.style";

function Result() {
  const { state, dispatch } = useContext(UserContext);
  const { scoreCount, username } = state;
  const quote = resultQuote(scoreCount);
  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>): void =>
    dispatch({
      type: Types.setName,
      payload: {
        username: target.value,
      },
    });

  return (
    <Layout>
      <Text variant="h1">{quote}</Text>
      <Text variant="h1">Your final score is {scoreCount}</Text>
      <UserName
        variant="outlined"
        placeholder="Insert Name Here"
        value={username}
        onChange={handleOnChange}
      />
    </Layout>
  );
}

export default Result;
