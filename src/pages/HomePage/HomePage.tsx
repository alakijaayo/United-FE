import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { resetCount } from "../../api/api";
import Layout from "../../layout";
import { UserContext } from "../../providers/UserProvider";
import { StyledGrid, Text, StyledButton } from "./HomePage.styles";

interface HomePageProps {
  levels: string[];
}

function HomePage({ levels }: HomePageProps) {
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    resetCount().then((response) => {
      dispatch({ type: "resetNumbers", payload: response });
    });
    sessionStorage.removeItem("questionCount");
    sessionStorage.removeItem("score");
  });

  return (
    <Layout>
      <Text variant="h3">Welcome to the Manchester United Quiz</Text>
      <Text variant="h3">
        A quiz about the greatest football team in the world!
      </Text>
      <Text variant="h3">Please choose your difficulty:</Text>
      <StyledGrid container rowSpacing={{ xs: 3, md: 6 }}>
        {levels.map((level, idx) => (
          <Grid key={`${level}-${idx}`} item xs={12} md={4}>
            <StyledButton variant="contained" disableRipple href={level}>
              {level}
            </StyledButton>
          </Grid>
        ))}
      </StyledGrid>
    </Layout>
  );
}

export default HomePage;
