import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserProvider";
import { StyledFooter, StyledToolbar, Text } from "./Footer.style";

function Footer() {
  const { userName } = useContext(UserContext);

  return (
    <>
      <StyledFooter position="fixed">
        <StyledToolbar>
          <Text variant="h4">Question: 0/25</Text>
          <Text variant="h4">Name: {userName}</Text>
          <Text variant="h4">Score: 0/25</Text>
        </StyledToolbar>
      </StyledFooter>
    </>
  );
}

export default Footer;
