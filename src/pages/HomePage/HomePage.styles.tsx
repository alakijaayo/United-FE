import { Grid, styled, Typography, Button } from "@mui/material";

export const Text = styled(Typography)`
  margin: 1rem;
  font-weight: 800;
  font-size: 24px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 2.5rem;
    font-size: 60px;
  }
`;

export const StyledGrid = styled(Grid)`
  text-align: center;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 4rem;
  }
`;

export const StyledButton = styled(Button)`
  width: 250px;
  height: 70px;
  background: red;
  font-size: 24px;
  font-weight: 800;
  line-height: inherit;

  &:hover {
    background: black;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: 300px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 350px;
  }
`;
