import { Grid } from "@mui/material";
import Button from "../../components/Button";
import Layout from "../../layout";
// import { Types } from "../../providers/UserProvider/reducer";
// import { UserContext } from "../../providers/UserProvider/UserProvder";
import { StyledGrid, Text, Wrapper } from "./HomePage.styles";

// interface HomePageProps {
//   username: string;
//   setUsername: Dispatch<SetStateAction<string>>;
// }

function HomePage() {
  // const { dispatch } = useContext(UserContext);

  // const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>
  //   setUsername(e.target.value);

  // const handleOnSubmit = () => {
  //   dispatch({
  //     type: Types.setName,
  //     payload: {
  //       username: username,
  //     },
  //   });
  // };

  return (
    <Layout>
      <Wrapper>
        <Text variant="h3">Welcome to the Manchester United Quiz</Text>
        <Text variant="h3">
          A quiz about the greatest football team in the world!
        </Text>
        <Text variant="h3">Please Insert your Name:</Text>
        {/* <UserName
          variant="outlined"
          placeholder="Insert Name Here"
          value={username}
          onChange={handleOnChange}
        />
        <Submit variant="contained" onClick={() => handleOnSubmit()}>
          Submit
        </Submit> */}
        <Text variant="h3">Please choose your difficulty:</Text>
        <StyledGrid
          container
          rowSpacing={6}
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
