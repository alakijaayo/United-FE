import { Grid } from "@mui/material";
import Button from "../../components/Button";
import Layout from "../../layout";
import { StyledGrid, Text } from "./HomePage.styles";

interface HomePageProps {
  levels: string[];
}

function HomePage({ levels }: HomePageProps) {
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
            <Button text={level} link={level} />
          </Grid>
        ))}
      </StyledGrid>
    </Layout>
  );
}

export default HomePage;
