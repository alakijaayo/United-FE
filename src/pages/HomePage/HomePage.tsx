import { Grid } from "@mui/material";
import { Dispatch, SetStateAction, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Layout from "../../layout";
import { UserContext } from "../../providers/UserProvider";
import { Types } from "../../providers/UserProvider/reducer";
import { StyledGrid, Text } from "./HomePage.styles";

interface HomePageProps {
  levels: string[];
  setRoute: Dispatch<SetStateAction<string>>;
}

function HomePage({ levels, setRoute }: HomePageProps) {
  const history = useNavigate();
  const { dispatch } = useContext(UserContext);

  const onLevelSelect = (level: string) => {
    setRoute(level);
    dispatch({ type: Types.AddQuestion });

    history(level);
  };

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
            <Button text={level} onClick={() => onLevelSelect(level)} />
          </Grid>
        ))}
      </StyledGrid>
    </Layout>
  );
}

export default HomePage;
