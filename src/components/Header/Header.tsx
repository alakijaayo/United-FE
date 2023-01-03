import IconButton from "../IconButton";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import {
  StyledButton,
  StyledHeader,
  StyledToolbar,
  Text,
} from "./Header.style";
import MenuOptions from "../../models/MenuOptions";

function Header() {
  const homeOptions: MenuOptions = {
    icon: HomeIcon,
    iconProps: {
      color: "white",
    },
    path: "/",
  };

  const leaderboardOptions: MenuOptions = {
    icon: LeaderboardIcon,
    iconProps: {
      color: "white",
    },
    path: "/",
  };

  return (
    <>
      <StyledHeader position="static">
        <StyledToolbar>
          <StyledButton color="inherit" variant="outlined" href="/">
            Homepage
          </StyledButton>
          <IconButton options={homeOptions} />
          <Text variant="h4">United Quiz</Text>
          <IconButton options={leaderboardOptions} />
          <StyledButton color="inherit" variant="outlined" href="/">
            Leaderboard
          </StyledButton>
        </StyledToolbar>
      </StyledHeader>
    </>
  );
}

export default Header;
