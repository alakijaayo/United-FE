import { Grid } from "@mui/material";
import Layout from "../../layout";
import { QuestionText, StyledGrid, Option, Wrapper } from "./Questions.style";

function Questions() {
  return (
    <Layout>
      <Wrapper>
        <QuestionText variant="h3">
          Hello, how's it going? Testing to see how well this looks and how this
          could be with two lines on it
        </QuestionText>
        <StyledGrid container rowSpacing={{ xs: 4, md: 8 }} spacing={2}>
          <Grid item xs={12} md={6}>
            <Option text="test" link="/" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Option text="test" link="/" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Option text="test" link="/" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Option text="test" link="/" />
          </Grid>
        </StyledGrid>
      </Wrapper>
    </Layout>
  );
}

export default Questions;
