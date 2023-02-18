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
import { resetCount } from "../../api/api";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

function Header() {
  const { dispatch } = useContext(UserContext);
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

  const resetUserCount = () => {
    resetCount().then((response) => {
      dispatch({ type: "resetNumbers", payload: response });
    });
    sessionStorage.removeItem("questionCount");
    sessionStorage.removeItem("score");
  };

  return (
    <>
      <StyledHeader position="static">
        <StyledToolbar>
          <StyledButton
            color="inherit"
            variant="outlined"
            onClick={resetUserCount}
            href="/"
          >
            Homepage
          </StyledButton>
          <IconButton options={homeOptions} onClick={resetUserCount} />
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
