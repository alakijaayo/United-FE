import { ChangeEvent, useContext } from "react";
import { UserContext } from "../../app/App";
import LevelsButton from "../../components/LevelsButton";
import Layout from "../../layout";
import { LevelsBox, Text, UserName, Wrapper } from "./HomePage.styles";

function HomePage() {
  const { userName, setUserName } = useContext(UserContext);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  return (
    <Layout>
      <Wrapper>
        <Text variant="h3">Welcome to the Manchester United Quiz</Text>
        <Text variant="h3">
          A quiz about the greatest football team in the world!
        </Text>
        <Text variant="h3">Please Insert your Name:</Text>
        <UserName
          variant="outlined"
          placeholder="Insert Name Here"
          value={userName}
          onChange={handleOnChange}
        />
        <Text variant="h3">Please choose your difficulty:</Text>
        <LevelsBox>
          <LevelsButton level="Easy" />
          <LevelsButton level="Medium" />
          <LevelsButton level="Hard" />
        </LevelsBox>
      </Wrapper>
    </Layout>
  );
}

export default HomePage;
