import { Grid } from "@mui/material";
import Button from "../../components/Button";
import Layout from "../../layout";
import { StyledGrid, Text } from "./HomePage.styles";

function HomePage() {
  console.log(process.env.NODE_ENV);
  return (
    <Layout>
      <Text variant="h3">Welcome to the Manchester United Quiz</Text>
      <Text variant="h3">
        A quiz about the greatest football team in the world!
      </Text>
      <Text variant="h3">Please choose your difficulty:</Text>
      <StyledGrid container rowSpacing={{ xs: 3, md: 6 }}>
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
    </Layout>
  );
}

export default HomePage;
