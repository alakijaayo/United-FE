import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserProvider";
import { StyledFooter, StyledToolbar, Text } from "./Footer.style";

function Footer() {
  const { state } = useContext(UserContext);
  const { questionCount, scoreCount } = state;

  return (
    <>
      <StyledFooter position="fixed">
        <StyledToolbar>
          <Text variant="h4">Question: {questionCount}/25</Text>
          <Text variant="h4">Score: {scoreCount}/25</Text>
        </StyledToolbar>
      </StyledFooter>
    </>
  );
}

export default Footer;
