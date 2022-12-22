import { Grid } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import Button from "../../components/Button";
import Layout from "../../layout";
import { UserContext } from "../../providers/UserProvider/UserProvider";
import { StyledGrid, Text, UserName, Wrapper } from "./HomePage.styles";

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
        <StyledGrid
          container
          rowSpacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={4}>
            <Button text="Easy" link="easy" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button text="Medium" link="medium" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button text="Hard" link="hard" />
          </Grid>
        </StyledGrid>
      </Wrapper>
    </Layout>
  );
}

export default HomePage;
