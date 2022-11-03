import { Button } from "@mui/material";
import { StyledHeader, StyledToolbar, Text } from "./Header.styles";

function Header() {
  return (
    <>
      <StyledHeader position="static">
        <StyledToolbar>
          <Button color="inherit" variant="outlined">
            Homepage
          </Button>
          <Text variant="h4">United Quiz</Text>
          <Button color="inherit" variant="outlined">
            Leaderboard
          </Button>
        </StyledToolbar>
      </StyledHeader>
    </>
  );
}

export default Header;
